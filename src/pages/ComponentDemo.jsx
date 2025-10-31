import ButtonDemo from '../components/demos/ButtonDemo';
import CardDemo from '../components/demos/CardDemo';
import CodeExamples from '../components/demos/CodeExamples';

function ComponentDemo() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
          Component Library Demo
        </h1>

        <ButtonDemo />
        <CardDemo />
        <CodeExamples />
      </div>
    </div>
  );
}

export default ComponentDemo;
