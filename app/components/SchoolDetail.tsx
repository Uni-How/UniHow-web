'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

interface ISchool {
  _id: string;
  school_id: string;
  school_name: string;
  school_type: string;
  school_images: string[];
  school_url?: string;
  campuses: {
    campus_id: string;
    campus_name: string;
    is_main: boolean;
    location: {
      city: string;
      district: string;
      address: string;
      google_map_url?: string;
    };
  }[];
  departments: {
    department_id: string;
    department_name: string;
    college: string;
    academic_group: string;
    campus_ids: string[];
    admission_data?: any;
  }[];
}

interface SchoolDetailProps {
  school: ISchool | null;
  selectedYear: '114' | '115';
  selectedDeptIndex: number;
}

export default function SchoolDetail({ school, selectedYear, selectedDeptIndex }: SchoolDetailProps) {
  const searchParams = useSearchParams();
  const method = searchParams.get('method') || 'personal_application';

  const planData = useMemo(() => {
    if (!school) return null;
    const selectedDept = school.departments[selectedDeptIndex];
    const admissionData = selectedDept?.admission_data?.[selectedYear];
    return admissionData?.plans?.[method];
  }, [school, selectedDeptIndex, selectedYear, method]);

  const selectedDept = school?.departments[selectedDeptIndex];

  if (!school) {
    return (
      <aside className="detail">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
          請選擇一所學校查看詳情
        </div>
      </aside>
    );
  }

  const getSchoolImage = (school: ISchool) => {
    if (school.school_images && school.school_images.length > 0) {
      return school.school_images[0];
    }
    return `https://placehold.co/800x400/e0e0e0/666?text=${encodeURIComponent(school.school_name)}`;
  };

  return (
    <aside className="detail">
      <div className="detail-top">
        <img className="rounded main-hero" src={getSchoolImage(school)} alt="校園主圖" loading="lazy" />
      </div>

      <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#333' }}>{school.school_name}</span>
          {selectedDept && (
            <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F5AA8' }}>{selectedDept.department_name}</span>
          )}
        </div>
        {selectedDept && (
          <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>{selectedDept.college}</span>
            <span>•</span>
            <span className="tag blue" style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem' }}>{selectedDept.academic_group || '其他'}</span>
          </div>
        )}
      </div>

      <div className="meta-links" style={{ marginBottom: '0.75rem' }}>
        <a href={school.school_url || '#'} target="_blank" rel="noopener noreferrer">校務資訊</a>
      </div>

      <div className="detail-data">
        {planData?.last_year_pass_data ? (
          <div className="selection-order">
            <div className="so-table">
              <div className="so-head">去年({selectedYear === '115' ? '114' : '113'})最低通過級分與篩選順序</div>
              <div className="so-body">
                {planData.last_year_pass_data.passing_sequence && planData.last_year_pass_data.passing_sequence.length > 0 ? (
                  <div className="so-row scores">
                    {planData.last_year_pass_data.passing_sequence.slice(0, 3).map((item: any, idx: number) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="col">
                          <div className="label">{item.subject}</div>
                          <div className="value">{item.grade || '--'}</div>
                          {item.note && <div style={{ fontSize: '0.7rem', color: '#666' }}>({item.note})</div>}
                        </div>
                        {idx < Math.min(planData.last_year_pass_data.passing_sequence.length - 1, 2) && (
                          <div className="arrow" aria-hidden="true">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="so-row placeholder"><div className="col"><div className="value muted">尚無資料</div></div></div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="selection-order">
            <div className="so-table">
              <div className="so-head">去年({selectedYear === '115' ? '114' : '113'})最低通過級分與篩選順序</div>
              <div className="so-body">
                <div className="so-row placeholder"><div className="col"><div className="value muted">資料尚未提供</div></div></div>
              </div>
            </div>
          </div>
        )}
        
        <div className="data-table">
          <div className="thead">
            <div>科目</div>
            <div>門檻</div>
            <div>倍率</div>
          </div>
          {planData?.exam_thresholds && planData.exam_thresholds.length > 0 ? (
            planData.exam_thresholds.map((threshold: any, idx: number) => {
              const multiplier = planData.selection_multipliers?.find((m: any) => m.subject === threshold.subject);
              return (
                <div key={idx} className="trow">
                  <div>{threshold.subject}</div>
                  <div>{threshold.threshold || '--'}</div>
                  <div>{multiplier?.multiplier ? `x${multiplier.multiplier}` : '--'}</div>
                </div>
              );
            })
          ) : (
            <>
              <div className="trow"><div>國文</div><div>--</div><div>--</div></div>
              <div className="trow"><div>英文</div><div>--</div><div>--</div></div>
              <div className="trow"><div>數學A</div><div>--</div><div>--</div></div>
              <div className="trow"><div>自然</div><div>--</div><div>--</div></div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
