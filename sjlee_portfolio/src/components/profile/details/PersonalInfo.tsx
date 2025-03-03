import "../Profile.css"

import React from "react"

const PersonalInfo: React.FC = () => {
  return (
    <div id="personal-info">
      <h2>이성준</h2>
      <table>
        <tbody>
          <tr>
            <td className="td-title">전공</td>
            <td className="td-content">피아노</td>
          </tr>
          <tr>
            <td className="td-title">생년월일</td>
            <td className="td-content">1997. 05. 25.</td>
          </tr>
          <tr>
            <td className="td-title">전화번호</td>
            <td className="td-content">010-4950-9213</td>
          </tr>
          <tr>
            <td className="td-title">이메일</td>
            <td className="td-content">sungjoon25@yonsei.ac.kr</td>
          </tr>
          <tr>
            <td className="td-title">깃허브</td>
            <td className="td-content">https://github.com/SJLee-0525</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PersonalInfo
