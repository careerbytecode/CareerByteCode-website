import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCheck,
  faHeadset,
  faGraduationCap,
  faAward,
  faKey,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import '../CSS/enterpriseCSS/enterpricesection1.css'; // Make sure this CSS includes animation

const EnterpriseSection1 = () => {
  const [green, setGreen] = React.useState(false);
  const [orange, setOrange] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [accent, setAccent] = React.useState(false);
  const [purple, setPurple] = React.useState(false);
  const [enterprimary, setEnterPrimary] = React.useState(false);

  const greenRef = React.useRef(null);
  const orangeRef = React.useRef(null);
  const secondaryRef = React.useRef(null);
  const accentRef = React.useRef(null);
  const purpleRef = React.useRef(null);
  const enterprimaryRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === greenRef.current) setGreen(true);
            if (entry.target === orangeRef.current) setOrange(true);
            if (entry.target === secondaryRef.current) setSecondary(true);
            if (entry.target === accentRef.current) setAccent(true);
            if (entry.target === purpleRef.current) setPurple(true);
            if (entry.target === enterprimaryRef.current) setEnterPrimary(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(greenRef.current);
    observer.observe(orangeRef.current);
    observer.observe(secondaryRef.current);
    observer.observe(accentRef.current);
    observer.observe(purpleRef.current);
    observer.observe(enterprimaryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partnership-benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive benefits and transform your organization's technical capabilities with our comprehensive partnership program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 👇 Each card with ref and animate if visible */}

          {/* Training & Certification */}
          <div ref={enterprimaryRef} className={`enterprimary p-8 rounded-xl border border-accent/20 transition-all duration-700 ease-in-out ${enterprimary ? 'animate-fadeUp' : 'opacity-0'}`}>
            <div className="w-16 h-16 enterprimary rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faGraduationCap} className="enterprimary p-2 rounded-full text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Certification</h3>
            <p className="text-gray-600 mb-4">Access exclusive training programs and certifications for your team</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="enterprimary mr-2 p-2 rounded-full" />Partner certification programs</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="enterprimary mr-2 p-2 rounded-full" />Free access to premium content</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="enterprimary mr-2 p-2 rounded-full" />Instructor-led training sessions</li>
            </ul>
          </div>

          {/* Dedicated Support */}
          <div ref={secondaryRef} className={`secondary p-8 rounded-xl border transition-all duration-700 ease-in-out ${secondary ? 'animate-fadeUp' : 'opacity-0'}`}>
            <div className="w-16 h-16 secondary rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faHeadset} className="secondary p-2 rounded-full text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
            <p className="text-gray-600 mb-4">Get comprehensive support from our partnership team throughout your journey</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="secondary mr-2 p-2 rounded-full" />24/7 technical support</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="secondary mr-2 p-2 rounded-full" />Dedicated account manager</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="secondary mr-2 p-2 rounded-full" />Marketing co-op programs</li>
            </ul>
          </div>

          {/* Co-Branding */}
          <div ref={accentRef} className={`accent p-8 rounded-xl border transition-all duration-700 ease-in-out ${accent ? 'animate-fadeUp' : 'opacity-0'}`}>
            <div className="w-16 h-16 accent rounded-2xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faAward} className="accent p-2 rounded-full text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Co-Branding Opportunities</h3>
            <p className="text-gray-600 mb-4">Leverage our brand recognition while maintaining your unique identity</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="accent mr-2 p-2 rounded-full" />Joint marketing campaigns</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="accent mr-2 p-2 rounded-full" />Co-branded certificates</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="accent mr-2 p-2 rounded-full" />Event sponsorship opportunities</li>
            </ul>
          </div>

          {/* Revenue Growth */}
          <div ref={orangeRef} className={`orange p-8 rounded-xl border border-primary/20 transition-all duration-700 ease-in-out ${orange ? 'animate-fadeUp' : 'opacity-0'}`}>
            <div className="w-16 h-16 orange p-2 rounded-2xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faChartLine} className="orange p-2 rounded-full text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Revenue Growth</h3>
            <p className="text-gray-600 mb-4">Generate additional revenue streams through our commission-based partnership model</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="orange mr-2 p-2 rounded-full" />Up to 30% commission rates</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="orange mr-2 p-2 rounded-full" />Recurring revenue opportunities</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="orange mr-2 p-2 rounded-full" />Performance-based bonuses</li>
            </ul>
          </div>

          {/* Early Access */}
          <div ref={greenRef} className={`green p-8 rounded-xl border border-green-500/20 transition-all duration-700 ease-in-out ${green ? 'animate-fadeUp' : 'opacity-0'}`}>
            <div className="w-16 h-16 green rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faKey} className="green p-2 rounded-full text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Access</h3>
            <p className="text-gray-600 mb-4">Get first access to new courses, features, and platform updates</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="green p-2 rounded-full mr-2" />Beta program participation</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="green mr-2 p-2 rounded-full" />Priority feature requests</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="green mr-2 p-2 rounded-full" />Exclusive partner events</li>
            </ul>
          </div>

          {/* Analytics */}
          <div ref={purpleRef} className={`purple p-8 rounded-xl border border-orange-500/20 transition-all duration-700 ease-in-out ${purple ? 'animate-fadeUp' : 'opacity-0'}`}>
            <div className="w-16 h-16 purple rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faChartPie} className="purple p-2 rounded-full text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Analytics</h3>
            <p className="text-gray-600 mb-4">Track performance and optimize your partnership with detailed insights</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="purple p-2 rounded-full mr-2" />Real-time dashboard</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="purple p-2 rounded-full mr-2" />Custom reporting tools</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="purple p-2 rounded-full mr-2" />Performance benchmarking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseSection1;
