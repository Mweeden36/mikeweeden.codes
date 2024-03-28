import { Gift, MessageCircle, TrendingUp, Users } from "react-feather";

export default function Values() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center items-center p-8 w-full">
      <div className="flex flex-col max-w-3xl gap-4 dark:bg-advanced-darkness bg-primary p-6 shadow-md rounded-md">
        <div className="">
          <h2 className="text-xl font-semibold py-2">
            Here are some of my work environment values
          </h2>
          <ul>
            <li className="pb-2 pt-4">
              <b className="flex justify-start items-center">
                <MessageCircle className="inline mr-2" />
                Transparency
              </b>
              <p className="pt-2">
                Honest and direct communication keeps things running smoothly,
                and that means better results!
              </p>
            </li>
            <li className="pb-2 pt-4">
              <b className="flex justify-start items-center">
                <TrendingUp className="inline mr-2" />
                Improvement
              </b>
              <p className="pt-2">
                Don&apos;t let perfect be the enemy of good! Things are never
                perfect the first time, but we can always make it better.
              </p>
            </li>
            <li className="pb-2 pt-4">
              <b className="flex justify-start items-center">
                <Users className="inline mr-2" />
                Collaboration
              </b>
              <p className="pt-2">
                I believe one of the best ways to improve is by bouncing ideas
                off team members. We get the opportunity to grow together and
                build something great! Need a duck? I&apos;m happy to listen.
              </p>
            </li>
            <li className="pb-2 pt-4">
              <b className="flex justify-start items-center">
                <Gift className="inline mr-2" />
                Fun
              </b>
              <p className="pt-2">
                Work should be fun, and I do my best to keep things light!
                Typically in the form of bad jokes.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
