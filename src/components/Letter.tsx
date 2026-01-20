export const Letter = () => {
  return (
    <article className="max-w-2xl mx-auto bg-paper paper-texture rounded-sm border border-paper-edge letter-shadow p-8 sm:p-12 md:p-16">
      {/* Decorative header */}
      <header className="text-center mb-10 opacity-0 animate-fade-in-up">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent mx-auto" style={{ background: 'linear-gradient(to right, transparent, hsl(215 55% 40% / 0.4), transparent)' }} />
      </header>

      {/* Letter content */}
      <div className="space-y-6 text-ink leading-relaxed text-lg sm:text-xl">
        <p className="opacity-0 animate-fade-in-up animation-delay-100">
          Пару дней назад мы с тобой оборвали наши отношения. Всё это время мне не даёт покоя мысль о том, что это всё произошло из-за моей глупой ошибки. Я думал: «Вот начнётся учёба — период, когда я вновь смогу с тобой видеться, и всё продолжится вновь», но, увы, жизнь распорядилась иначе, и я узнал, что ты уезжаешь далеко-далеко. Грустно ли от этого? Да. Но намного неприятнее от того, что, оказывается, ты была открыта к общению со мной; от того, что, возможно, если бы я не переставал тебе писать, у нас бы что-то получилось. Всё ещё не могу принять то, как тупо я тебя упустил.
        </p>

        <p className="opacity-0 animate-fade-in-up animation-delay-200">
          Во время брейка я не хотел переставать общаться. Я искал любой повод, чтобы написать тебе, и иногда это, возможно, выглядело нелепо. Когда я был в Астане по буткэмпу, нам сказали, что дают нам один день для отдыха — как раз в то время, когда ты была в Алмате. Я хотел поехать, хотел увидеться с тобой и дать новый заряд для общения. Я написал тебе, поинтересовавшись, какие у тебя планы на завтра, но оказалось, что вы праздновали день рождения. Это было нормально, ведь у тебя было очень мало времени, и я понимал, что всё твоё время уже спланировано для встречи с друзьями.
        </p>

        <div className="py-4 opacity-0 animate-fade-in-up animation-delay-300">
          <p className="text-ink-light italic text-center text-base sm:text-lg">
            Что я хочу, написав это письмо?
          </p>
        </div>

        <p className="opacity-0 animate-fade-in-up animation-delay-400">
          У нас ещё есть чуть больше недели, и, возможно, этого хватит, чтобы открыться друг другу, стать ближе, чем просто знакомые: начать общение, чтобы мы могли общаться и после. Если действительно так суждено, то даже твоя поездка не будет преградой. Меня расстраивает тот факт, что мы с тобой оборвали наши отношения так, будто мы с тобой больше никогда не пересечёмся. Я не хочу жить и думать: «если бы не расстояние» или «если бы я был смелее и настойчивее». Не хочу жить с «если бы иначе». Я хочу жить с осознанием, что я сделал всё возможное со своей стороны, вылил все свои мысли. Не хочу жить с сожалениями об упущенных возможностях.
        </p>

        <blockquote className="py-6 opacity-0 animate-fade-in-up animation-delay-500">
          <p className="font-script text-2xl sm:text-3xl text-center text-accent-blue">
            «Каждый проживает ту жизнь, на которую хватило смелости»
          </p>
        </blockquote>

        <p className="opacity-0 animate-fade-in-up animation-delay-600">
          На днях я спросил у друзей, что для них значит делать что-то важное, и один ответил так: это когда ты готов сделать для человека то, что думал, никогда не сделаешь. И это письмо я пишу с полностью открытой душой и лёгкостью, что для меня, как для человека, который крайне редко ощущает сентиментальность по отношению к себе, является чем-то необычным.
        </p>

        <div className="pt-6 space-y-4 opacity-0 animate-fade-in-up animation-delay-700">
          <p className="text-ink">
            Если я смог достучаться до тебя, то просто дай знать.
          </p>
          <p className="text-ink-light">
            Если же нет, то я буду знать, что я сделал всё возможное со своей стороны, и если даже так остался без ответа, то я приму это с достоинством и уважением твоего выбора.
          </p>
        </div>
      </div>

      {/* Decorative footer */}
      <footer className="mt-12 pt-8 opacity-0 animate-fade-in-up animation-delay-800">
        <div className="w-24 h-[1px] mx-auto" style={{ background: 'linear-gradient(to right, transparent, hsl(215 55% 40% / 0.4), transparent)' }} />
      </footer>
    </article>
  );
};
