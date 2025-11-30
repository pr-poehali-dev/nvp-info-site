import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  
  const [showInfo2, setShowInfo2] = useState(false);
  const [showReviews2, setShowReviews2] = useState(false);
  const [showAbout2, setShowAbout2] = useState(false);
  
  const [showInfo3, setShowInfo3] = useState(false);
  const [showReviews3, setShowReviews3] = useState(false);
  const [showAbout3, setShowAbout3] = useState(false);
  
  const [showInfo4, setShowInfo4] = useState(false);
  const [showReviews4, setShowReviews4] = useState(false);
  const [showAbout4, setShowAbout4] = useState(false);
  
  const [showInfo5, setShowInfo5] = useState(false);
  const [showReviews5, setShowReviews5] = useState(false);
  const [showAbout5, setShowAbout5] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <div className="pt-16 text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Препод.info
        </h1>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-start gap-8 flex-wrap">
          <div className="w-80">
            <img 
              src="https://cdn.poehali.dev/files/6aee3449-eeed-44d0-8d74-686d7865ed07.png" 
              alt="Клейменова Елена Викторовна"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
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
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Должность</p>
                    <p className="text-sm text-gray-700">Преподаватель, первая квалификационная категория</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Преподаваемые дисциплины</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      ОП.09 Охрана труда, МДК.01.01 Техническое обслуживание электрооборудования электрических станций, сетей и систем, МДК.01.02 Наладка электрооборудования электрических станций, сетей и систем, МДК.06.01 Выполнение работ по профессии «Электрослесарь по ремонту электрооборудования электростанций», УП.06.01 Учебная практика, УП.04.01 Учебная практика, ПП.01.01 Производственная практика (по профилю специальности), ПП.06.01 Производственная практика (по профилю специальности), ПДП Производственная практика (преддипломная), Руководство ВКР
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Ученая степень, ученое звание</p>
                    <p className="text-sm text-gray-700">Нет</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Образование</p>
                    <p className="text-sm text-gray-700">
                      Высшее, в 2013г. НОУ ВПО «Международный институт компьютерных технологий» — «Электроэнергетические системы и сети» — Инженер
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Повышение квалификации/стажировка</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Стажировка по программе «Атомные электрические станции и установки», май 2018г.; стажировка по программе «Обслуживание электрооборудования электрических станций, сетей и систем», февраль 2020г.; обучение по программе «Цифровая трансформация университета», ноябрь 2021 – январь 2022; обучение по программе «Комплексное сопровождение образовательного процесса обучения инвалидов и лиц с ограниченными возможностями здоровья в организациях высшего и среднего профессионального образования», ноябрь-декабрь 2022г.; обучение по программе «Психолого-педагогические особенности дистанционного обучения», ноябрь 2022 – январь 2023
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Профессиональная переподготовка</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      По программе профессиональной переподготовки «Преподаватель по неразрушающему контролю в системе СПО», октябрь-декабрь 2020г.; по программе профессиональной переподготовки «Охрана труда», квалификация: Преподаватель учебной дисциплины «Охрана труда» в СПО, апрель – май 2021г.
                    </p>
                  </div>
                  
                  <div className="flex gap-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Общий стаж работы</p>
                      <p className="text-sm text-gray-700 font-semibold">12 лет</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Педагогический стаж</p>
                      <p className="text-sm text-gray-700 font-semibold">7 лет</p>
                    </div>
                  </div>
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
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Ну я думаю, я сейчас скажу за многих, но если говорить в общей сфере... 
                      Как никак она всего 3 месяца с нами, а уже правда стала как вторая мама, именно она о нас заботится, помогает, поддерживает, не дает погрустить, с нами старается быть на одной волне. Именно она в нас верит, в частых случаях мы ее расстраиваем и шумим, но думаю это у нас скоро пройдет, и мы станем взрослее и уже после нового года такого не будет, я думаю группа меня поддержит и согласится, что надо быть лучшими для нее. В частых случаях даже наше настроение меняется от ее настроения, бывает хочется подойти и извиниться перед ней за то, что мы где-то накосячили, не смогли сделать так, как она нас просила.
                      <br /><br />
                      А вообщем, она самый лучший преподаватель из всех, человек который дает нам самые настоящие знания, ждет от нас той же отдачи, среди всех она самая добрая, красивая, ласковая, нежная.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 1 курса, группа Д25</p>
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
          
          <div className="w-80">
            <img 
              src="https://cdn.poehali.dev/files/cf6e3385-3683-424d-a654-452c978b8a45.png" 
              alt="Кочеткова Марина Валерьевна"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">Кочеткова Марина Валерьевна</h2>
            <Button 
              onClick={() => setShowInfo2(!showInfo2)}
              className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Icon name="Info" size={18} className="mr-2" />
              Узнать информацию
            </Button>
            
            {showInfo2 && (
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
                      <p className="text-sm text-gray-600">kochetkova@mephi.ru</p>
                    </div>
                  </div>
                  
                  <div className="pt-3 space-y-2">
                    <Button 
                      onClick={() => setShowAbout2(!showAbout2)}
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10"
                    >
                      <Icon name="User" size={16} className="mr-2" />
                      Про преподавателя
                    </Button>
                    
                    <Button 
                      onClick={() => setShowReviews2(!showReviews2)}
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
            
            {showAbout2 && (
              <Card className="mt-4 border-2 border-accent/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" size={20} className="text-accent" />
                    Про преподавателя
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Кочеткова Марина Валерьевна — опытный преподаватель истории с многолетним стажем. Специализируется на углубленном изучении отечественной истории и всеобщего исторического процесса. Имеет научные публикации и активно развивает у учащихся аналитическое мышление и работу с историческими источниками.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {showReviews2 && (
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
                      <Icon name="Star" size={16} className="fill-gray-300 text-gray-300" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Преподаватель хоть и строгий, но хороший. На ее паре легко можно заработать хорошую оценку, достаточно просто прочитать и написать лекции, которые она дает, она не сильно придирчивая к словам, но если на ее парах будет плохое поведение, она запомнит.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 1 курса</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="w-80">
            <img 
              src="https://cdn.poehali.dev/files/cef83fba-36cf-4276-9e73-8650a60bf7cb.jpg" 
              alt="Люлина Дарья Дмитриевна"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">Люлина Дарья Дмитриевна</h2>
            <Button 
              onClick={() => setShowInfo3(!showInfo3)}
              className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Icon name="Info" size={18} className="mr-2" />
              Узнать информацию
            </Button>
            
            {showInfo3 && (
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
                      <p className="text-sm text-gray-600">lyulina@mephi.ru</p>
                    </div>
                  </div>
                  
                  <div className="pt-3 space-y-2">
                    <Button 
                      onClick={() => setShowAbout3(!showAbout3)}
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10"
                    >
                      <Icon name="User" size={16} className="mr-2" />
                      Про преподавателя
                    </Button>
                    
                    <Button 
                      onClick={() => setShowReviews3(!showReviews3)}
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
            
            {showAbout3 && (
              <Card className="mt-4 border-2 border-accent/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" size={20} className="text-accent" />
                    Про преподавателя
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Преподаватель высшей категории с большим опытом работы в сфере образования. Ведёт курсы по математике и информатике для студентов. Активно внедряет в учебный процесс современные IT-технологии и проектные методики.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {showReviews3 && (
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
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Хороший преподаватель, хорошо объясняет. Самый лучший преподаватель математики!
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 2 курса</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-gray-300 text-gray-300" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Преподавательница любит на своих парах дисциплину, в случае нарушения, она дает либо самостоятельную всей группе либо огромную лекцию.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 1 курса</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Преподаватель высшей категории с большим опытом работы в сфере образования. Ведёт курсы по математике и информатике для студентов. Активно внедряет в учебный процесс современные IT-технологии и проектные методики.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 3 курса</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="w-80">
            <img 
              src="https://cdn.poehali.dev/files/93fbcf03-97fd-400b-bcf1-c0e097691ff3.png" 
              alt="Ковалева Софья Александровна"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">Ковалева Софья Александровна</h2>
            <Button 
              onClick={() => setShowInfo4(!showInfo4)}
              className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Icon name="Info" size={18} className="mr-2" />
              Узнать информацию
            </Button>
            
            {showInfo4 && (
              <Card className="mt-4 border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Информация о преподавателе</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Briefcase" size={18} className="text-primary mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Должность</p>
                      <p className="text-sm text-gray-600">Преподаватель биологии и информатики</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Building" size={18} className="text-secondary mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Кафедра</p>
                      <p className="text-sm text-gray-600">НВПИ НИЯУ МИФИ</p>
                    </div>
                  </div>
                  
                  <div className="pt-3 space-y-2">
                    <Button 
                      onClick={() => setShowAbout4(!showAbout4)}
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10"
                    >
                      <Icon name="User" size={16} className="mr-2" />
                      Про преподавателя
                    </Button>
                    
                    <Button 
                      onClick={() => setShowReviews4(!showReviews4)}
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
            
            {showAbout4 && (
              <Card className="mt-4 border-2 border-accent/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" size={20} className="text-accent" />
                    Про преподавателя
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Куратор учебных групп, преподаватель биологии и информатики. Создаёт доброжелательную атмосферу на занятиях, помогает студентам разобраться в сложных темах. Использует интересные примеры из жизни для объяснения материала.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {showReviews4 && (
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
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Дорогой учитель биологии! Спасибо вам огромное за ваше терпение, внимание и вдохновение, которое вы дарите каждому ученику. Мы благодарны вам за каждую лекцию. Вы лучший учитель биологии, любим Вас!
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Софья Александровна лучший куратор в техе, прекрасный преподаватель биологии и информатики.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент группы</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Ковалева — хороший преподаватель, многого не требует, хорошо рассказывает лекции, рассказывает истории на паре, объясняет если не понятно, может намекнуть на правильный ответ, только вот за опоздание приходится стихи рассказывать.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 2 курса</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="w-80">
            <img 
              src="https://cdn.poehali.dev/files/b46bca34-2734-46fd-a2b6-febb0800a92d.jpg" 
              alt="Ливенцева Анна Сергеевна"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <h2 className="text-2xl font-bold mt-4 text-gray-800">Ливенцева Анна Сергеевна</h2>
            <Button 
              onClick={() => setShowInfo5(!showInfo5)}
              className="mt-4 w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Icon name="Info" size={18} className="mr-2" />
              Узнать информацию
            </Button>
            
            {showInfo5 && (
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
                  
                  <div className="pt-3 space-y-2">
                    <Button 
                      onClick={() => setShowAbout5(!showAbout5)}
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10"
                    >
                      <Icon name="User" size={16} className="mr-2" />
                      Про преподавателя
                    </Button>
                    
                    <Button 
                      onClick={() => setShowReviews5(!showReviews5)}
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
            
            {showAbout5 && (
              <Card className="mt-4 border-2 border-accent/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" size={20} className="text-accent" />
                    Про преподавателя
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Добрый и отзывчивый преподаватель, который всегда готов помочь студентам. Создает позитивную атмосферу на занятиях, делая процесс обучения интересным и комфортным.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {showReviews5 && (
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
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Не сильно требовательный преподаватель, очень добрая, позитивная, веселая.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Замечательный педагог, всегда готова помочь разобраться в материале. На парах царит дружеская атмосфера.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 1 курса</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Анна Сергеевна очень доброжелательная и понимающая. С ней легко общаться, и всегда можно договориться по любому вопросу.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">— Студент 2 курса</p>
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