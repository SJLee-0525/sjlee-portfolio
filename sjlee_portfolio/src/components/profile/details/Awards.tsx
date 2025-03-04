import "../Profile.css";

import React from "react";

const Awards: React.FC = () => {
  return (
    <div id="personal-info">
      <h3>수상</h3>
      <table>
        <tbody>
          <tr>
            <td className="td-title">1학기 성적 우수상 (3위)</td>
            <td className="td-content">
              <span>삼성전자</span>
              <span>2024. 11. 29.</span>
            </td>
          </tr>
          <tr>
            <td className="td-title">1학기 프로젝트 최우수상 (1위)</td>
            <td className="td-content">
              <span>삼성전자</span>
              <span>2024. 11. 29.</span>
            </td>
          </tr>
          <tr>
            <td className="td-title">공통 프로젝트 최우수상 (1위)</td>
            <td className="td-content">
              <span>삼성전자</span>
              <span>2025. 11. 29.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Awards;
