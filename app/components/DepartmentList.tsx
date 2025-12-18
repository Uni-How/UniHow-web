'use client';

import { useSearchParams } from 'next/navigation';

interface Department {
  department_id: string;
  department_name: string;
  college: string;
  academic_group: string;
  campus_ids: string[];
  admission_data?: any;
}

interface ISchool {
  _id: string;
  school_id: string;
  school_name: string;
  departments: Department[];
}

interface DepartmentListProps {
  school: ISchool | null;
  selectedYear: '114' | '115';
  selectedDeptIndex: number;
  onSelectDept: (index: number) => void;
  onYearChange: (year: '114' | '115') => void;
}

export default function DepartmentList({ 
  school, 
  selectedYear, 
  selectedDeptIndex, 
  onSelectDept,
  onYearChange 
}: DepartmentListProps) {
  const searchParams = useSearchParams();
  const method = searchParams.get('method') || 'personal_application';

  if (!school) {
    return (
      <div className="department-panel">
        <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
          請選擇一所學校
        </div>
      </div>
    );
  }

  return (
    <div className="department-panel">
      <h3 style={{ 
        fontSize: '1rem', 
        fontWeight: 600, 
        marginBottom: '0.75rem',
        color: '#333'
      }}>
        {school.school_name} - 科系列表
      </h3>

      {/* Year Toggle */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginBottom: '0.75rem',
        padding: '0.25rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <button 
          onClick={() => onYearChange('114')}
          style={{
            flex: 1,
            padding: '0.4rem',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: selectedYear === '114' ? '#0F5AA8' : 'white',
            color: selectedYear === '114' ? 'white' : '#333',
            fontWeight: selectedYear === '114' ? 'bold' : 'normal',
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          114學年
        </button>
        <button 
          onClick={() => onYearChange('115')}
          style={{
            flex: 1,
            padding: '0.4rem',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: selectedYear === '115' ? '#0F5AA8' : 'white',
            color: selectedYear === '115' ? 'white' : '#333',
            fontWeight: selectedYear === '115' ? 'bold' : 'normal',
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          115學年
        </button>
      </div>

      <div style={{ 
        fontSize: '0.8rem', 
        color: '#666', 
        marginBottom: '0.5rem' 
      }}>
        共 {school.departments.length} 個科系
      </div>

      <div className="department-items">
        {school.departments.map((dept, idx) => {
          const deptAdmissionData = dept.admission_data?.[selectedYear];
          const hasData = deptAdmissionData?.plans && Object.keys(deptAdmissionData.plans).length > 0;

          return (
            <div 
              key={idx} 
              onClick={() => onSelectDept(idx)}
              className={`department-item ${idx === selectedDeptIndex ? 'selected' : ''}`}
            >
              <div className="dept-main">
                <span className="dept-name">{dept.department_name}</span>
                <span className="dept-college">{dept.college}</span>
              </div>
              <div className="dept-right">
                <span className="tag blue dept-tag">
                  {dept.academic_group || '其他'}
                </span>
                {!hasData && selectedYear === '115' && (
                  <span className="dept-pending">待公告</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
