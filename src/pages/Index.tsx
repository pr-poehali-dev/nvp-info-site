import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);
  
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
              alt="Клейменова Елена Викторовна"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">Клейменова Елена Викторовна</h2>
            <Button 
              onClick={() => setShowInfo(!showInfo)}
              className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Icon name="Info" size={18} className="mr-2" />
              Узнать информацию
            </Button>
            
            {showInfo && (
              <Card className="mt-4 border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Информация о преподавателе</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Briefcase" size={18} className="text-primary mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Должность</p>
                      <p className="text-sm text-gray-600">Преподаватель</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Building" size={18} className="text-secondary mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Кафедра</p>
                      <p className="text-sm text-gray-600">НВПИ НИЯУ МИФИ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Mail" size={18} className="text-accent mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Контакты</p>
                      <p className="text-sm text-gray-600">klimenova@mephi.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;