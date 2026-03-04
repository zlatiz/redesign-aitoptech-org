export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-background-dark mb-8">
        About
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Ai Top Technologies LLC is registered in Delaware, USA, and specializes in 
          cutting-edge artificial intelligence solutions for businesses worldwide.
        </p>
        
        <h2 className="text-2xl font-semibold text-background-dark mt-12 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are dedicated to advancing the field of artificial intelligence through 
          innovative research and practical applications that drive business value.
        </p>

        <h2 className="text-2xl font-semibold text-background-dark mt-12 mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          With deep expertise in machine learning, cloud computing, and secure data 
          processing, we help organizations harness the power of AI to transform their 
          operations and achieve their strategic objectives.
        </p>

        <div className="bg-white rounded-lg p-8 shadow-md mt-12">
          <h3 className="text-xl font-semibold text-background-dark mb-4">
            Company Information
          </h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Legal Name:</strong> Ai Top Technologies LLC</p>
            <p><strong>Registration:</strong> Delaware, USA</p>
            <p><strong>Email:</strong> <a href="mailto:info@aitoptech.org" className="text-primary-500 hover:underline">info@aitoptech.org</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}