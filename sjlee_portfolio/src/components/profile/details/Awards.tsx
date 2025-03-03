import "../Profile.css"

import React from "react"

const Awards: React.FC = () => {
  return (
    <div id="personal-info">
      <h3>수상</h3>
      <table>
        <tbody>
          <tr>
            <td className="td-title">SSAFY 1학기 성적 우수상 (3위)</td>
            <td className="td-content">2024. 11. 29.</td>
          </tr>
          <tr>
            <td className="td-title">SSAFY 1학기 프로젝트 최우수상 (1위)</td>
            <td className="td-content">2024. 11. 29.</td>
          </tr>
          <tr>
            <td className="td-title">SSAFY 공통 프로젝트 최우수상 (1위)</td>
            <td className="td-content">2025. 3. 123.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Awards
