import React, { createContext, useState } from "react"

import { Portfolio } from "../model/project"

import aidapHomeImg from "../assets/portfolio/aidap/home.png"
import aidapLoginImg from "../assets/portfolio/aidap/login.png"
import aidapSignupImg from "../assets/portfolio/aidap/signup.png"
import aidapProfileImg from "../assets/portfolio/aidap/profile.png"
import aidapNewsImg from "../assets/portfolio/aidap/news.png"
import aidapDepositList from "../assets/portfolio/aidap/deposit-list.png"
import aidapDepositCal from "../assets/portfolio/aidap/deposit-cal.png"
import aidapMortgageList from "../assets/portfolio/aidap/mortgage-list.png"
import aidapMortgageCal from "../assets/portfolio/aidap/mortgage-cal.png"
import aidapProductDetailImg from "../assets/portfolio/aidap/product-detail.png"
import aidapAiChatImg from "../assets/portfolio/aidap/ai-chat.png"
import aidapCommunityImg from "../assets/portfolio/aidap/community-search.png"
import aidapCommunityDetailImg from "../assets/portfolio/aidap/community-like.png"

import heroHomeImg from "../assets/portfolio/hero/home.png"
import heroMobileHomeImg from "../assets/portfolio/hero/home-mb.png"
import heroNormalNotiImg from "../assets/portfolio/hero/normal-noti.png"
import heroNotiImg from "../assets/portfolio/hero/noti.png"
import heroNotiPeriodImg from "../assets/portfolio/hero/noti-period.png"
import heroCalendarImg from "../assets/portfolio/hero/calendar.png"
import heroMessageImg from "../assets/portfolio/hero/message.png"
import heroHealthImg from "../assets/portfolio/hero/health.png"
import heroEmotionalReportImg from "../assets/portfolio/hero/emotion-report.png"
import heroMentalReportImg from "../assets/portfolio/hero/mental-report.png"
import heroFamilyInfoImg from "../assets/portfolio/hero/family-info.png"
import heroMemberInfoImg from "../assets/portfolio/hero/sub-info.png"

export const PortfolioContext = createContext({
  projectModal: -1,
  handleProjectModal: (index: number): void => {},
  handleCloseProjectModal: (): void => {},
  portfolios: [] as Portfolio[],
})

const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projectModal, setProjectModal] = useState<number>(-1)

  function handleProjectModal(index: number): void {
    console.log(index)
    setProjectModal(index)
  }

  function handleCloseProjectModal(): void {
    setProjectModal(-1)
  }

  const portfolios: Portfolio[] = [
    {
      project: {
        title: "아이답(AIDAP)",
        name: "SSAFY 12기 관통 프로젝트 (금융)",
        description: "생성형 AI와 금융 데이터를 활용한 금융 상품 로보 어드바이저 서비스 : 아이답(AIDAP)",
        duration: "2024. 11. 18. ~ 2024. 11. 26.",
        team: [
          ["Backend", 1],
          ["Frontend", 1],
        ],
        collaboration_tools: ["GitLab", "Mattermost"],
        award: "SSAFY 12기 1학기 관통 프로젝트 최우수상(1위) 수상",
        videoUrl: "https://www.youtube.com/embed/gtoMOWh9y9M?si=L93WYOyjigbxeyK3",
        imgSrc: [
          aidapHomeImg,
          aidapLoginImg,
          aidapSignupImg,
          aidapProfileImg,
          aidapNewsImg,
          aidapDepositList,
          aidapDepositCal,
          aidapMortgageList,
          aidapMortgageCal,
          aidapProductDetailImg,
          aidapAiChatImg,
          aidapCommunityImg,
          aidapCommunityDetailImg,
        ],
      },
      responsibilities: {
        role: "Frontend",
        tasks: ["웹 페이지 개발", "프로젝트 발표 자료 제작"],
      },
      technologies: [
        ["Program Language", ["JavaScript", "HTML5", "CSS"]],
        ["Language Engine", ["Node.js"]],
        ["Web SPA Library", ["Vue.js"]],
        ["Bundling Tool", ["Vite"]],
        ["State Management", ["Pinia"]],
      ],
      retrospective: {
        positives: [
          [
            "첫 프로젝트 경험",
            "1학기 동안 정말 많은 것을 배웠지만, 배운 내용을 통합해 활용해 본 경험은 없었습니다.\n이번 관통 프로젝트를 하면서 학기 초에 배운 후 시간이 지나 잊혀졌던 개념부터, 배운 지 얼마 되지 않아 익숙하지 않은 것까지 전부 사용해보며 다시 기억을 되새길 수 있어서 좋았던 것 같습니다.\n또한 제가 사이트를 직접 구현하고, 구현한 사이트가 작동하는 모습을 보면서 정말 많은 즐거움과 보람을 느낄 수 있었습니다. \n이번 프로젝트를 계기로 더 많은 프로젝트를 경험하며 실력을 쌓고 싶다는 동기부여가 되었고, 앞으로 더 많은 프로젝트를 경험하며 발전해 나가고 싶습니다.",
          ],
          [
            "Git을 활용한 협업 및 업무 분담",
            "github이나 gitlab을 사용하며 기본적인 git 사용 경험은 가지고 있었지만, 이렇게 다른 팀원과 같은 git 저장소를 공유하며 사용해 본 적은 처음입니다.\n때문에 git에 merge request를 할 때마다 충돌이 발생하지 않을까 걱정했지만, 결과적으로 문제 없이 문제 없이 Git을 활용해 협업을 마무리할 수 있었습니다.\n또한, 각자 자신 있는 부분을 맡아 업무를 분담하고, 각자의 역할을 수행하면서 효율적으로 프로젝트를 진행할 수 있었습니다.\n다음 프로젝트에서는 더 체계적인 branch 전략 및 commit 전략을 구축해서, 보다 체계적인 협업 환경을 만들고자 합니다.",
          ],
        ],
        negatives: [
          [
            "사이트 스타일링",
            "프로젝트 기간이 짧다 보니, CSS를 통해 직접 사이트를 디자인 하기보다는 bootstrap을 활용해 사이트를 디자인 하였습니다.\n덕분에 빠른 속도로 개발이 가능했고 디자인에 통일성을 줄 수 있었지만, 결과적으로 획일적이고 특색 없는 사이트가 만들어졌다고 생각합니다.\n다음 프로젝트에서는 CSS를 직접 구현하며 CSS 관련한 지식도 쌓고, 저만의 개성을 가진 사이트를 만들고자 합니다.",
          ],
        ],
      },
    },
    {
      project: {
        title: "영웅이",
        name: "SSAFY 12기 공통 프로젝트 (AIoT)",
        description: 'Carebot Project - AI 실버케어 로봇 플랫폼 "영웅이"',
        duration: "2025. 01. 06. ~ 2025. 02. 21.",
        team: [
          ["Embedded", 2],
          ["Backend", 2],
          ["Frontend", 2],
        ],
        collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
        award: "SSAFY 12기 공통 프로젝트 최우수상(1위) 수상",
        videoUrl: "https://www.youtube.com/embed/LQlEIiO-5KE?si=yiSNqXRtNwi9Rvbj",
        imgSrc: [
          heroHomeImg,
          heroMobileHomeImg,
          heroNormalNotiImg,
          heroNotiImg,
          heroNotiPeriodImg,
          heroCalendarImg,
          heroMessageImg,
          heroHealthImg,
          heroEmotionalReportImg,
          heroMentalReportImg,
          heroFamilyInfoImg,
          heroMemberInfoImg,
        ],
      },
      responsibilities: {
        role: "Frontend",
        tasks: ["보호자 페이지 개발", "영상 포트폴리오 제작", "JIRA를 활용한 프로젝트 진행 관리"],
      },
      technologies: [
        ["Program Language", ["JavaScript", "HTML5", "CSS"]],
        ["Language Engine", ["Node.js"]],
        ["Web SPA Library", ["React.js"]],
        ["Bundling Tool", ["Vite"]],
        ["Code Analysis Tool", ["ESLint"]],
        ["etc", ["Recharts", "date-fns", "GSAP"]],
      ],
      retrospective: {
        positives: [
          [
            "Git 학습",
            "여러 명이서 역할을 나눠 프로젝트를 진행하는 것이 처음인 만큼 git은 프로젝트 시작 전 가장 걱정되던 부분이었습니다.\n하지만, 컨설턴트 님께서 추천해주신 git 배우는 사이트를 통한 학습과, 팀원들의 git 사용 모습을 보면서 어느 정도 git 사용에 적응할 수 있었던 것 같습니다.\n또한 Main, Dev, Feature, Hotfix로 나눠 브랜치 전략을 수립했고, 코드 리뷰를 병행하면서 git을 활용한 협업 능력을 더 기를 수 있었던 것 같습니다.\n실제로 Merge Conflict가 발생하는 일 없이, 순탄하게 프로젝트를 마무리할 수 있었습니다.",
          ],
          [
            "JIRA를 이용한 협업 관리",
            "이번 프로젝트를 진행하면서 처음 JIRA를 접하고 사용해 보았습니다.\n처음에는 사용법도 잘 모르겠고 까먹는 경우가 많았지만, 기업에서 실제로 JIRA를 어떻게 사용하는지 체험해보자는 일념으로 컨설턴트 님께 계속 질문하고 배우며 사용하려고 노력했습니다.\n그 결과 매일 매일 JIRA를 들어가서 확인해보는 습관을 가질 수 있었고, 초반에는 엉성했던 번다운 차트도 점차 개선되는 모습을 확인할 수 있었고, 협업 툴을 활용하는 역량을 기를 수 있었습니다.\n다음 프로젝트에서는 부족했던 부분을 더 보완해서, 더욱 체계적으로 사용할 수 있도록 노력할 계획입니다.",
          ],
          [
            "React 및 JavaScript 활용 능력 향상",
            "React가 Vue보다 난이도가 높다는 이야기를 많이 들어 프로젝트 시작 전에 걱정이 많았습니다. 하지만 여러 강의를 수강하며 꾸준히 학습한 결과, React를 이용해 목표로 했던 기능들을 대부분 구현할 수 있었습니다.\n또한, Vue보다 자유도가 높은 React의 특성 덕분에 다양한 JavaScript 문법을 활용할 기회가 많았고, 이를 통해 JavaScript 활용 능력도 자연스럽게 향상시킬 수 있었습니다.",
          ],
          [
            "CSS 활용",
            "이전 1학기 관통 프로젝트에서는 대부분을 Bootstrap에 의존했기 때문에, 여러가지 아쉬움이 있었습니다. 때문에 이번 공통 프로젝트에서는 Tailwind CSS 등의 프레임워크를 사용할 지 고민했지만, CSS 실력을 더욱 향상시키고 싶어 기본 CSS를 직접 작성하며 스타일을 구현하는 방향을 선택했습니다.\nmedia query를 활용해 다양한 해상도에서 올바르게 동작하는 반응형 디자인을 직접 구현하였으며, keyframes와 transition을 적절히 활용하여 사용자 경험을 향상시키는 자연스러운 애니메이션 효과를 추가하는 데 집중했습니다.\n또한 반응형 디자인을 적용하는 과정에서 특히 네비게이션 바의 position 및 z-index 설정에 어려움을 겪었지만, 여러 시도를 거쳐 문제를 해결하며 관련 개념을 보다 깊이 이해할 수 있었습니다.\n이러한 과정을 통해 CSS에 대한 이해도를 높이고 다양한 기능을 활용할 수 있었으며, 앞으로도 더욱 이해도를 높여 다양한 디자인을 구현해 보고 싶습니다.",
          ],
        ],
        negatives: [
          [
            "치밀하지 못했던 설계",
            "프로젝트의 분량이 작지 않았고, 처음 사용하는 것들이 많았기 때문에 시간이 부족할 것이라는 생각이 앞섰습니다. \n때문에 설계 단계를 최소화하고 빠르게 개발을 시작했는데, 이 점이 나중에 가서는 독으로 다가왔던 것 같습니다.\n물론 빠르게 개발을 시작한 덕분에 초기에 계획했던 대부분의 기능을 구현할 수는 있었지만, 프로젝트가 점점 확장되면서 폴더 및 코드 구조, 상태 관리 방식 등에서 여러 가지 아쉬운 점이 드러났습니다.\n또한 관리해야 할 데이터가 많지 않을 것이라고 판단해 Context API만으로 상태 관리를 진행했지만, 프로젝트가 복잡해지면서 상태 간 의존성이 높아지고, 특정 컴포넌트에서 불필요한 리렌더링이 발생하는 문제가 있었습니다.\n전역 상태 관리 라이브러리를 도입하기에는 너무 늦어버린 상황이었기에, 계속해서 수정을 가하는 방법밖에는 없었습니다. \n결국 문제를 해결하는 데에는 성공했지만, 처음부터 설계를 탄탄히 잡고 갔다면 더욱 효율적으로 프로젝트를 진행할 수 있었을 것이라는 점이 아쉬웠습니다.\n이러한 경험을 통해, 개발 속도도 중요하지만 탄탄한 설계가 결국 프로젝트의 완성도를 결정한다는 점을 실감할 수 있었고, 앞으로는 프로젝트를 시작하기 전에 꼼꼼히 설계하는 습관을 들이고자 합니다.",
          ],
          [
            "GIT 활용의 아쉬움",
            "branch 전략은 잘 지켜졌으나, commit 단위의 관리와 메시지 작성 방식에서 아쉬운 점이 많았습니다.\n특히, 코드 리뷰 과정이 부족했던 점이 가장 크게 남습니다. 프로젝트가 빠르게 배포되면서, 배포 서버에서 직접 결과를 확인하고 싶은 마음에 코드 리뷰를 충분히 진행하지 않은 채 배포를 우선시하는 경우가 많았습니다\n앞으로는 commit 메시지를 더욱 명확하고 일관성 있게 작성하며, 꼼꼼한 코드 리뷰를 통해서 사고를 미연에 방지하고 코드를 보는 능력을 기르고자 합니다",
          ],
          [
            "TypeScript 미사용",
            "이번 프로젝트에서는 TypeScript를 사용하지 않고 JavaScript로만 개발을 진행했습니다.\n처음에는 React, JIRA, Git 등 배워야 하는 것이 많아, 학습 부담을 줄이기 위해 JavaScript를 선택했지만, 개발이 진행될수록 타입 안정성이 부족한 문제를 경험하게 되었습니다.\n특히, API 응답 데이터의 구조를 명확하게 정의하지 않아 잘못된 데이터가 들어왔을 때 바로 감지하지 못하는 경우가 있었고, 이에 따라 디버깅에 시간이 소요되기도 했습니다.\n이번 경험을 바탕으로,  TypeScript를 공부해 다음 프로젝트에서는 TypeScript를 도입할 계획입니다",
          ],
        ],
      },
    },
    {
      project: {
        title: "아이답(AIDAP)",
        name: "SSAFY 12기 관통 프로젝트 (금융)",
        description: "생성형 AI와 금융 데이터를 활용한 금융 상품 로보 어드바이저 서비스 : 아이답(AIDAP)",
        duration: "2024. 11. 18. ~ 2024. 11. 26.",
        team: [
          ["Backend", 1],
          ["Frontend", 1],
        ],
        collaboration_tools: ["GitLab", "Mattermost"],
        award: "SSAFY 12기 1학기 관통 프로젝트 최우수상(1위) 수상",
        videoUrl: "https://www.youtube.com/embed/gtoMOWh9y9M?si=L93WYOyjigbxeyK3",
        imgSrc: [
          aidapHomeImg,
          aidapLoginImg,
          aidapSignupImg,
          aidapProfileImg,
          aidapNewsImg,
          aidapDepositList,
          aidapDepositCal,
          aidapMortgageList,
          aidapMortgageCal,
          aidapProductDetailImg,
          aidapAiChatImg,
          aidapCommunityImg,
          aidapCommunityDetailImg,
        ],
      },
      responsibilities: {
        role: "Frontend",
        tasks: ["웹 페이지 개발", "프로젝트 발표 자료 제작"],
      },
      technologies: [
        ["Program Language", ["JavaScript", "HTML5", "CSS"]],
        ["Language Engine", ["Node.js"]],
        ["Web SPA Library", ["Vue.js"]],
        ["Bundling Tool", ["Vite"]],
        ["State Management", ["Pinia"]],
      ],
      retrospective: {
        positives: [
          [
            "첫 프로젝트 경험",
            "1학기 동안 정말 많은 것을 배웠지만, 배운 내용을 통합해 활용해 본 경험은 없었습니다.\n이번 관통 프로젝트를 하면서 학기 초에 배운 후 시간이 지나 잊혀졌던 개념부터, 배운 지 얼마 되지 않아 익숙하지 않은 것까지 전부 사용해보며 다시 기억을 되새길 수 있어서 좋았던 것 같습니다.\n또한 제가 사이트를 직접 구현하고, 구현한 사이트가 작동하는 모습을 보면서 정말 많은 즐거움과 보람을 느낄 수 있었습니다. \n이번 프로젝트를 계기로 더 많은 프로젝트를 경험하며 실력을 쌓고 싶다는 동기부여가 되었고, 앞으로 더 많은 프로젝트를 경험하며 발전해 나가고 싶습니다.",
          ],
          [
            "Git을 활용한 협업 및 업무 분담",
            "github이나 gitlab을 사용하며 기본적인 git 사용 경험은 가지고 있었지만, 이렇게 다른 팀원과 같은 git 저장소를 공유하며 사용해 본 적은 처음입니다.\n때문에 git에 merge request를 할 때마다 충돌이 발생하지 않을까 걱정했지만, 결과적으로 문제 없이 문제 없이 Git을 활용해 협업을 마무리할 수 있었습니다.\n또한, 각자 자신 있는 부분을 맡아 업무를 분담하고, 각자의 역할을 수행하면서 효율적으로 프로젝트를 진행할 수 있었습니다.\n다음 프로젝트에서는 더 체계적인 branch 전략 및 commit 전략을 구축해서, 보다 체계적인 협업 환경을 만들고자 합니다.",
          ],
        ],
        negatives: [
          [
            "사이트 스타일링",
            "프로젝트 기간이 짧다 보니, CSS를 통해 직접 사이트를 디자인 하기보다는 bootstrap을 활용해 사이트를 디자인 하였습니다.\n덕분에 빠른 속도로 개발이 가능했고 디자인에 통일성을 줄 수 있었지만, 결과적으로 획일적이고 특색 없는 사이트가 만들어졌다고 생각합니다.\n다음 프로젝트에서는 CSS를 직접 구현하며 CSS 관련한 지식도 쌓고, 저만의 개성을 가진 사이트를 만들고자 합니다.",
          ],
        ],
      },
    },
    {
      project: {
        title: "영웅이",
        name: "SSAFY 12기 공통 프로젝트 (AIoT)",
        description: 'Carebot Project - AI 실버케어 로봇 플랫폼 "영웅이"',
        duration: "2025. 01. 06. ~ 2025. 02. 21.",
        team: [
          ["Embedded", 2],
          ["Backend", 2],
          ["Frontend", 2],
        ],
        collaboration_tools: ["GitLab", "JIRA", "Notion", "Mattermost"],
        award: "SSAFY 12기 공통 프로젝트 최우수상(1위) 수상",
        videoUrl: "https://www.youtube.com/embed/LQlEIiO-5KE?si=yiSNqXRtNwi9Rvbj",
        imgSrc: [
          heroHomeImg,
          heroMobileHomeImg,
          heroNormalNotiImg,
          heroNotiImg,
          heroNotiPeriodImg,
          heroCalendarImg,
          heroMessageImg,
          heroHealthImg,
          heroEmotionalReportImg,
          heroMentalReportImg,
          heroFamilyInfoImg,
          heroMemberInfoImg,
        ],
      },
      responsibilities: {
        role: "Frontend",
        tasks: ["보호자 페이지 개발", "영상 포트폴리오 제작", "JIRA를 활용한 프로젝트 진행 관리"],
      },
      technologies: [
        ["Program Language", ["JavaScript", "HTML5", "CSS"]],
        ["Language Engine", ["Node.js"]],
        ["Web SPA Library", ["React.js"]],
        ["Bundling Tool", ["Vite"]],
        ["Code Analysis Tool", ["ESLint"]],
        ["etc", ["Recharts", "date-fns", "GSAP"]],
      ],
      retrospective: {
        positives: [
          [
            "Git 학습",
            "여러 명이서 역할을 나눠 프로젝트를 진행하는 것이 처음인 만큼 git은 프로젝트 시작 전 가장 걱정되던 부분이었습니다.\n하지만, 컨설턴트 님께서 추천해주신 git 배우는 사이트를 통한 학습과, 팀원들의 git 사용 모습을 보면서 어느 정도 git 사용에 적응할 수 있었던 것 같습니다.\n또한 Main, Dev, Feature, Hotfix로 나눠 브랜치 전략을 수립했고, 코드 리뷰를 병행하면서 git을 활용한 협업 능력을 더 기를 수 있었던 것 같습니다.\n실제로 Merge Conflict가 발생하는 일 없이, 순탄하게 프로젝트를 마무리할 수 있었습니다.",
          ],
          [
            "JIRA를 이용한 협업 관리",
            "이번 프로젝트를 진행하면서 처음 JIRA를 접하고 사용해 보았습니다.\n처음에는 사용법도 잘 모르겠고 까먹는 경우가 많았지만, 기업에서 실제로 JIRA를 어떻게 사용하는지 체험해보자는 일념으로 컨설턴트 님께 계속 질문하고 배우며 사용하려고 노력했습니다.\n그 결과 매일 매일 JIRA를 들어가서 확인해보는 습관을 가질 수 있었고, 초반에는 엉성했던 번다운 차트도 점차 개선되는 모습을 확인할 수 있었고, 협업 툴을 활용하는 역량을 기를 수 있었습니다.\n다음 프로젝트에서는 부족했던 부분을 더 보완해서, 더욱 체계적으로 사용할 수 있도록 노력할 계획입니다.",
          ],
          [
            "React 및 JavaScript 활용 능력 향상",
            "React가 Vue보다 난이도가 높다는 이야기를 많이 들어 프로젝트 시작 전에 걱정이 많았습니다. 하지만 여러 강의를 수강하며 꾸준히 학습한 결과, React를 이용해 목표로 했던 기능들을 대부분 구현할 수 있었습니다.\n또한, Vue보다 자유도가 높은 React의 특성 덕분에 다양한 JavaScript 문법을 활용할 기회가 많았고, 이를 통해 JavaScript 활용 능력도 자연스럽게 향상시킬 수 있었습니다.",
          ],
          [
            "CSS 활용",
            "이전 1학기 관통 프로젝트에서는 대부분을 Bootstrap에 의존했기 때문에, 여러가지 아쉬움이 있었습니다. 때문에 이번 공통 프로젝트에서는 Tailwind CSS 등의 프레임워크를 사용할 지 고민했지만, CSS 실력을 더욱 향상시키고 싶어 기본 CSS를 직접 작성하며 스타일을 구현하는 방향을 선택했습니다.\nmedia query를 활용해 다양한 해상도에서 올바르게 동작하는 반응형 디자인을 직접 구현하였으며, keyframes와 transition을 적절히 활용하여 사용자 경험을 향상시키는 자연스러운 애니메이션 효과를 추가하는 데 집중했습니다.\n또한 반응형 디자인을 적용하는 과정에서 특히 네비게이션 바의 position 및 z-index 설정에 어려움을 겪었지만, 여러 시도를 거쳐 문제를 해결하며 관련 개념을 보다 깊이 이해할 수 있었습니다.\n이러한 과정을 통해 CSS에 대한 이해도를 높이고 다양한 기능을 활용할 수 있었으며, 앞으로도 더욱 이해도를 높여 다양한 디자인을 구현해 보고 싶습니다.",
          ],
        ],
        negatives: [
          [
            "치밀하지 못했던 설계",
            "프로젝트의 분량이 작지 않았고, 처음 사용하는 것들이 많았기 때문에 시간이 부족할 것이라는 생각이 앞섰습니다. \n때문에 설계 단계를 최소화하고 빠르게 개발을 시작했는데, 이 점이 나중에 가서는 독으로 다가왔던 것 같습니다.\n물론 빠르게 개발을 시작한 덕분에 초기에 계획했던 대부분의 기능을 구현할 수는 있었지만, 프로젝트가 점점 확장되면서 폴더 및 코드 구조, 상태 관리 방식 등에서 여러 가지 아쉬운 점이 드러났습니다.\n또한 관리해야 할 데이터가 많지 않을 것이라고 판단해 Context API만으로 상태 관리를 진행했지만, 프로젝트가 복잡해지면서 상태 간 의존성이 높아지고, 특정 컴포넌트에서 불필요한 리렌더링이 발생하는 문제가 있었습니다.\n전역 상태 관리 라이브러리를 도입하기에는 너무 늦어버린 상황이었기에, 계속해서 수정을 가하는 방법밖에는 없었습니다. \n결국 문제를 해결하는 데에는 성공했지만, 처음부터 설계를 탄탄히 잡고 갔다면 더욱 효율적으로 프로젝트를 진행할 수 있었을 것이라는 점이 아쉬웠습니다.\n이러한 경험을 통해, 개발 속도도 중요하지만 탄탄한 설계가 결국 프로젝트의 완성도를 결정한다는 점을 실감할 수 있었고, 앞으로는 프로젝트를 시작하기 전에 꼼꼼히 설계하는 습관을 들이고자 합니다.",
          ],
          [
            "GIT 활용의 아쉬움",
            "branch 전략은 잘 지켜졌으나, commit 단위의 관리와 메시지 작성 방식에서 아쉬운 점이 많았습니다.\n특히, 코드 리뷰 과정이 부족했던 점이 가장 크게 남습니다. 프로젝트가 빠르게 배포되면서, 배포 서버에서 직접 결과를 확인하고 싶은 마음에 코드 리뷰를 충분히 진행하지 않은 채 배포를 우선시하는 경우가 많았습니다\n앞으로는 commit 메시지를 더욱 명확하고 일관성 있게 작성하며, 꼼꼼한 코드 리뷰를 통해서 사고를 미연에 방지하고 코드를 보는 능력을 기르고자 합니다",
          ],
          [
            "TypeScript 미사용",
            "이번 프로젝트에서는 TypeScript를 사용하지 않고 JavaScript로만 개발을 진행했습니다.\n처음에는 React, JIRA, Git 등 배워야 하는 것이 많아, 학습 부담을 줄이기 위해 JavaScript를 선택했지만, 개발이 진행될수록 타입 안정성이 부족한 문제를 경험하게 되었습니다.\n특히, API 응답 데이터의 구조를 명확하게 정의하지 않아 잘못된 데이터가 들어왔을 때 바로 감지하지 못하는 경우가 있었고, 이에 따라 디버깅에 시간이 소요되기도 했습니다.\n이번 경험을 바탕으로,  TypeScript를 공부해 다음 프로젝트에서는 TypeScript를 도입할 계획입니다",
          ],
        ],
      },
    },
  ]

  const ctxValue = {
    projectModal,
    handleProjectModal,
    handleCloseProjectModal,
    portfolios,
  }
  return <PortfolioContext.Provider value={ctxValue}>{children}</PortfolioContext.Provider>
}

export default PortfolioProvider
