import { useState } from 'react';
import { TypewriterText } from './TypewriterText';

const paragraphs = [
  {
    type: 'paragraph',
    text: 'Пару дней назад мы с тобой оборвали наши отношения. Всё это время мне не даёт покоя мысль о том, что это всё произошло из-за моей глупой ошибки. Я думал: «Вот начнётся учёба - период, когда я вновь смогу с тобой видеться, и всё продолжится вновь», но, увы, жизнь распорядилась иначе, и я узнал, что ты уезжаешь далеко-далеко. Грустно ли от этого? Да. Но намного неприятнее от того, что, оказывается, ты была открыта к общению со мной; от того, что, возможно, если бы я не переставал тебе писать, у нас бы что-то получилось. Всё ещё не могу принять то, как тупо я тебя упустил.',
  },
  {
    type: 'paragraph',
    text: 'Во время брейка я не хотел переставать общаться. Я искал любой повод, чтобы написать тебе, и иногда это, возможно, выглядело нелепо. Когда я был в Астане по буткэмпу, нам сказали, что дают нам один день для отдыха - как раз в то время, когда ты была в Алмате. Я хотел поехать, хотел увидеться с тобой и дать новый заряд для общения. Я написал тебе, поинтересовавшись, какие у тебя планы на завтра, но оказалось, что вы праздновали день рождения. Это было нормально, ведь у тебя было очень мало времени, и я понимал, что всё твоё время уже спланировано для встречи с друзьями.',
  },
  {
    type: 'question',
    text: 'Что я хочу, написав это письмо?',
  },
  {
    type: 'paragraph',
    text: 'У нас ещё есть чуть больше недели, и, возможно, этого хватит, чтобы открыться друг другу, стать ближе, чем просто знакомые: начать общение, чтобы мы могли общаться и после. Если действительно так суждено, то даже твоя поездка не будет преградой. Меня расстраивает тот факт, что мы с тобой оборвали наши отношения так, будто мы с тобой больше никогда не пересечёмся. Я не хочу жить и думать: «если бы не расстояние» или «если бы я был смелее и настойчивее». Не хочу жить с «если бы иначе». Я хочу жить с осознанием, что я сделал всё возможное со своей стороны, вылил все свои мысли. Не хочу жить с сожалениями об упущенных возможностях.',
  },
  {
    type: 'quote',
    text: '«Каждый проживает ту жизнь, на которую хватило смелости»',
  },
  {
    type: 'paragraph',
    text: 'На днях я спросил у друзей, что для них значит делать что-то важное, и один ответил так: это когда ты готов сделать для человека то, что думал, никогда не сделаешь. И это письмо я пишу с полностью открытой душой и лёгкостью, что для меня, как для человека, который крайне редко ощущает сентиментальность по отношению к себе, является чем-то необычным.',
  },
  {
    type: 'ending',
    text: 'Если я смог достучаться до тебя, то просто дай знать.',
  },
  {
    type: 'ending-alt',
    text: 'Если же нет, то я буду знать, что я сделал всё возможное со своей стороны, и если даже так остался без ответа, то я приму это с достоинством и уважением твоего выбора.',
  },
];

export const Letter = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleParagraphComplete = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setTimeout(() => {
        setCurrentParagraph((prev) => prev + 1);
      }, 400);
    }
  };

  const getDelay = (index: number) => {
    if (index === 0) return 800;
    return 0;
  };

  return (
    <article className="max-w-2xl mx-auto bg-paper paper-texture rounded-sm border border-paper-edge letter-shadow p-8 sm:p-12 md:p-16">
      {/* Decorative header */}
      <header className="text-center mb-10 animate-fade-in">
        <div
          className="w-24 h-[1px] mx-auto"
          style={{
            background: 'linear-gradient(to right, transparent, hsl(215 55% 40% / 0.4), transparent)',
          }}
        />
      </header>

      {/* Letter content */}
      <div className="space-y-6 text-ink leading-relaxed text-lg sm:text-xl">
        {paragraphs.map((para, index) => {
          if (index > currentParagraph) return null;

          const isActive = index === currentParagraph;

          if (para.type === 'question') {
            return (
              <div key={index} className="py-4">
                <p className="text-ink-light italic text-center text-base sm:text-lg">
                  <TypewriterText
                    text={para.text}
                    speed={35}
                    delay={getDelay(index)}
                    onComplete={isActive ? handleParagraphComplete : undefined}
                    showCursor={isActive}
                  />
                </p>
              </div>
            );
          }

          if (para.type === 'quote') {
            return (
              <blockquote key={index} className="py-6">
                <p className="font-script text-2xl sm:text-3xl text-center text-accent-blue">
                  <TypewriterText
                    text={para.text}
                    speed={40}
                    delay={getDelay(index)}
                    onComplete={isActive ? handleParagraphComplete : undefined}
                    showCursor={isActive}
                  />
                </p>
              </blockquote>
            );
          }

          if (para.type === 'ending') {
            return (
              <div key={index} className="pt-6">
                <p className="text-ink">
                  <TypewriterText
                    text={para.text}
                    speed={30}
                    delay={getDelay(index)}
                    onComplete={isActive ? handleParagraphComplete : undefined}
                    showCursor={isActive}
                  />
                </p>
              </div>
            );
          }

          if (para.type === 'ending-alt') {
            return (
              <p key={index} className="text-ink-light">
                <TypewriterText
                  text={para.text}
                  speed={30}
                  delay={getDelay(index)}
                  onComplete={isActive ? handleParagraphComplete : undefined}
                  showCursor={isActive}
                />
              </p>
            );
          }

          return (
            <p key={index}>
              <TypewriterText
                text={para.text}
                speed={20}
                delay={getDelay(index)}
                onComplete={isActive ? handleParagraphComplete : undefined}
                showCursor={isActive}
              />
            </p>
          );
        })}
      </div>

      {/* Decorative footer */}
      {currentParagraph === paragraphs.length - 1 && (
        <footer className="mt-12 pt-8 animate-fade-in">
          <div
            className="w-24 h-[1px] mx-auto"
            style={{
              background: 'linear-gradient(to right, transparent, hsl(215 55% 40% / 0.4), transparent)',
            }}
          />
        </footer>
      )}
    </article>
  );
};
