import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text" data-testid="certifications-title">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg" data-testid="certification-aws">
              <div className="flex items-center mb-4">
                <i className="fab fa-aws text-4xl text-orange-500 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid="certification-aws-title">AWS Certified Developer</h3>
                  <p className="text-gray-600" data-testid="certification-aws-level">Associate Level</p>
                </div>
              </div>
              <p className="text-gray-700" data-testid="certification-aws-description">
                Validated expertise in developing, deploying, and debugging cloud-based applications using AWS services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg" data-testid="certification-github">
              <div className="flex items-center mb-4">
                <i className="fab fa-github text-4xl text-gray-900 mr-4"></i>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid="certification-github-title">GitHub Actions Certification</h3>
                  <p className="text-gray-600" data-testid="certification-github-issuer">GitHub</p>
                </div>
              </div>
              <p className="text-gray-700" data-testid="certification-github-description">
                Demonstrated proficiency in automation and CI/CD pipeline development using GitHub Actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
