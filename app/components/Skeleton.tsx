// Base Skeleton component
export default function Skeleton({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`skeleton ${className}`} style={style}>
      <style jsx>{`
        .skeleton {
          background-color: #e0e0e0;
          background-image: linear-gradient(
            90deg,
            #e0e0e0 0px,
            #f0f0f0 40px,
            #e0e0e0 80px
          );
          background-size: 200% 100%;
          border-radius: 4px;
          animation: skeleton-loading 1.5s infinite linear;
        }

        @keyframes skeleton-loading {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
      `}</style>
    </div>
  );
}

// SchoolCard Skeleton - 學校卡片骨架
export function SchoolCardSkeleton() {
  return (
    <article className="card horiz skeleton-card">
      <div className="thumb skeleton-thumb"></div>
      <div className="card-body">
        <div className="card-top">
          <div className="skeleton-text skeleton-title"></div>
          <div className="skeleton-text skeleton-small"></div>
        </div>
        <div className="skeleton-text skeleton-sub"></div>
        <div className="skeleton-tags">
          <div className="skeleton-tag"></div>
          <div className="skeleton-tag"></div>
          <div className="skeleton-tag"></div>
        </div>
      </div>
      <style jsx>{`
        .skeleton-card {
          pointer-events: none;
        }
        .skeleton-thumb {
          width: 120px;
          min-width: 120px;
          height: 80px;
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
        .skeleton-text {
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        .skeleton-title {
          width: 60%;
          height: 20px;
          margin-bottom: 8px;
        }
        .skeleton-small {
          width: 80px;
          height: 14px;
        }
        .skeleton-sub {
          width: 40%;
          height: 14px;
          margin: 8px 0;
        }
        .skeleton-tags {
          display: flex;
          gap: 6px;
          margin-top: 8px;
        }
        .skeleton-tag {
          width: 50px;
          height: 22px;
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 12px;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </article>
  );
}

// DepartmentList Skeleton - 科系列表骨架
export function DepartmentListSkeleton() {
  return (
    <div className="department-panel skeleton-dept">
      <div className="skeleton-header">
        <div className="skeleton-text skeleton-title"></div>
        <div className="skeleton-toggle"></div>
      </div>
      <div className="skeleton-items">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="skeleton-item">
            <div className="skeleton-text skeleton-dept-name"></div>
            <div className="skeleton-text skeleton-college"></div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .skeleton-dept {
          pointer-events: none;
        }
        .skeleton-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #eee;
        }
        .skeleton-text {
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        .skeleton-title {
          width: 100px;
          height: 18px;
        }
        .skeleton-toggle {
          width: 80px;
          height: 28px;
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 6px;
        }
        .skeleton-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .skeleton-item {
          padding: 10px;
          border-radius: 6px;
          background: #fafafa;
        }
        .skeleton-dept-name {
          width: 70%;
          height: 16px;
          margin-bottom: 6px;
        }
        .skeleton-college {
          width: 40%;
          height: 12px;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

// SchoolDetail Skeleton - 學校詳情骨架
export function SchoolDetailSkeleton() {
  return (
    <aside className="detail skeleton-detail">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-text skeleton-title"></div>
        <div className="skeleton-text skeleton-link"></div>
        <div className="skeleton-dept-box">
          <div className="skeleton-text skeleton-dept-title"></div>
          <div className="skeleton-text skeleton-dept-sub"></div>
        </div>
        <div className="skeleton-table">
          <div className="skeleton-row skeleton-header-row"></div>
          <div className="skeleton-row"></div>
          <div className="skeleton-row"></div>
          <div className="skeleton-row"></div>
        </div>
      </div>
      <style jsx>{`
        .skeleton-detail {
          pointer-events: none;
        }
        .skeleton-image {
          width: 100%;
          height: 160px;
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 12px;
          margin-bottom: 16px;
        }
        .skeleton-content {
          padding: 0 4px;
        }
        .skeleton-text {
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        .skeleton-title {
          width: 50%;
          height: 24px;
          margin-bottom: 12px;
        }
        .skeleton-link {
          width: 30%;
          height: 14px;
          margin-bottom: 16px;
        }
        .skeleton-dept-box {
          background: #f8fafc;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 16px;
          border-left: 3px solid #ddd;
        }
        .skeleton-dept-title {
          width: 60%;
          height: 18px;
          margin-bottom: 8px;
        }
        .skeleton-dept-sub {
          width: 40%;
          height: 14px;
        }
        .skeleton-table {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .skeleton-row {
          height: 36px;
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 6px;
        }
        .skeleton-header-row {
          background: linear-gradient(90deg, #d8e8f8 25%, #e8f0f8 50%, #d8e8f8 75%);
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </aside>
  );
}
