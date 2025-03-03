import "../Profile.css"

import React from "react"

const EducationInfo: React.FC = () => {
  return (
    <div id="personal-info">
      <h3>학력</h3>
      <table>
        <tbody>
          <tr>
            <td className="td-title">예원학교</td>
            <td className="td-content">2010. 03. ~ 2013. 02.</td>
          </tr>
          <tr>
            <td className="td-title">서울예술고등학교</td>
            <td className="td-content">2013. 02. ~ 2016. 02.</td>
          </tr>
          <tr>
            <td className="td-title">연세대학교</td>
            <td className="td-content">2017. 03. ~ 2023. 08.</td>
          </tr>
        </tbody>
      </table>

      <h3>부트캠프</h3>
      <table>
        <tbody>
          <tr>
            <td className="td-title">SSAFY 12기</td>
            <td className="td-content">2024. 07. ~ 2025. 06.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EducationInfo
