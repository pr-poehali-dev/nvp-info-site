import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  
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
                  
                  <div className="pt-3 space-y-2">
                    <Button 
                      onClick={() => setShowAbout(!showAbout)}
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10"
                    >
                      <Icon name="User" size={16} className="mr-2" />
                      Про преподавателя
                    </Button>
                    
                    <Button 
                      onClick={() => setShowReviews(!showReviews)}
                      variant="outline"
                      className="w-full border-secondary/30 hover:bg-secondary/10"
                    >
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Отзывы
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {showAbout && (
              <Card className="mt-4 border-2 border-accent/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" size={20} className="text-accent" />
                    Про преподавателя
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Клейменова Елена Викторовна — опытный преподаватель с большим стажем работы. 
                    Специализируется на преподавании фундаментальных дисциплин. 
                    Имеет множество научных публикаций и активно участвует в образовательных проектах института.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {showReviews && (
              <Card className="mt-4 border-2 border-secondary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} className="text-secondary" />
                    Отзывы студентов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-700">Отличный преподаватель и отличный куратор у группы Д25</p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 1 курса</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-gray-300 text-gray-300" />
                    </div>
                    <p className="text-sm text-gray-700">Требовательная, но справедливая. Дает хорошую базу знаний.</p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 2 курса</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-700">Всегда готова помочь и ответить на вопросы. Спасибо за знания!</p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 4 курса</p>
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