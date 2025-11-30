const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <div className="pt-16 text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Препод.info
        </h1>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-start">
          <div className="w-80">
            <img 
              src="https://cdn.poehali.dev/files/6aee3449-eeed-44d0-8d74-686d7865ed07.png" 
              alt="Клименова Елена Викторовна"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">Клименова Елена Викторовна</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;