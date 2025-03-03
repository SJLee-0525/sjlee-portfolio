export type Portfolio = {
  project: {
    title: string
    name: string
    description: string
    duration: string
    team: [string, number][]
    collaboration_tools: string[]
    award: string
    videoUrl: string
    imgSrc: string[]
  }
  responsibilities: {
    role: string
    tasks: string[]
  }
  technologies: [string, string[]][]
  retrospective: {
    positives: [string, string][]
    negatives: [string, string][]
  }
}
