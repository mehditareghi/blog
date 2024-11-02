interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Darsoon - Online Learning Platform',
    description: `Led the development and migration of Darsoon from Wix to Next.js, greatly improving performance and reducing loading times by 30%. The transition enabled automation of manual tasks, integration of essential services, and saved hundreds of hours, making the platform highly scalable and efficient for both students and tutors.`,
    imgSrc: '/static/images/darsoon.png', // Replace with the path to an image for the project if available
    href: 'https://darsoon.com/en',
  },
  {
    title: 'Fundamentals of JavaScript',
    description: `A comprehensive JavaScript course designed to teach the foundations of JavaScript programming. This course includes interactive coding exercises to reinforce learning, helping over 500 students build a strong foundation in JavaScript.`,
    imgSrc: '/static/images/javascript-course.png', // Replace with the path to an image for the course if available
    href: 'https://quera.org/college/landpage/16059/fundamentals-of-javascript',
  },
  {
    title: 'Practical HTML and CSS',
    description: `An interactive course focused on hands-on projects and real-world applications of HTML and CSS. Over 300 students have completed this course, gaining practical skills for building responsive and accessible web designs.`,
    imgSrc: '/static/images/html-css-course.png', // Replace with the path to an image for the course if available
    href: 'https://quera.org/college/landpage/16809/html-css',
  },
]

export default projectsData
