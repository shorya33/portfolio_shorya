import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function TeachingSection() {
  const { ref, isVisible } = useScrollAnimation();

  const teachingExperiences = [
    {
      id: "flutter-instructor",
      title: "Flutter/Dart Instructor",
      company: "EsqureInfotech",
      duration: "Sep 2023 – May 2024",
      achievements: [
        "Taught Flutter and Dart fundamentals to aspiring mobile app developers with focus on UI design and state management",
        "Guided students through building cross-platform mobile applications using best practices in Flutter development",
        "Created course materials including video tutorials, code examples, and quizzes to enhance engagement and retention",
        "Assisted students with project development and debugging to prepare them for industry-level app development challenges",
        "Organized periodic assessments and provided constructive feedback to track student progress and performance"
      ],
      icon: "fab fa-google-play",
      color: "text-blue-500"
    },
    {
      id: "python-instructor",
      title: "Python Instructor",
      company: "EsqureInfotech",
      duration: "Jan 2023 – Aug 2023",
      achievements: [
        "Developed and delivered comprehensive Python programming curriculum to beginners and intermediate learners",
        "Conducted interactive live sessions and hands-on coding labs to strengthen student understanding of core concepts",
        "Designed practical projects and assignments to simulate real-world problem solving using Python",
        "Provided personalized mentorship and feedback to help students improve coding skills and debug effectively",
        "Facilitated student discussions and Q&A sessions to foster collaborative learning environments"
      ],
      icon: "fab fa-python",
      color: "text-green-600"
    }
  ];

  return (
    <section 
      id="teaching" 
      className="py-20 bg-white"
      aria-labelledby="teaching-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text" data-testid="teaching-title">Teaching Experience</h2>
          <div className="space-y-12">
            {teachingExperiences.map((exp) => (
              <div key={exp.id} className="bg-slate-50 p-8 rounded-xl shadow-lg" data-testid={`teaching-${exp.id}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center">
                    <i className={`${exp.icon} text-4xl ${exp.color} mr-4`}></i>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900" data-testid={`teaching-title-${exp.id}`}>{exp.title}</h3>
                      <p className="text-lg text-primary font-medium" data-testid={`teaching-company-${exp.id}`}>{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p className="font-medium" data-testid={`teaching-duration-${exp.id}`}>{exp.duration}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start" data-testid={`teaching-achievement-${exp.id}-${index}`}>
                      <i className="fas fa-chalkboard-teacher text-accent mt-1 mr-3 flex-shrink-0"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}