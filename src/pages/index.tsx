import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { Auth } from "../components/Auth";
import { Layout } from "../components/Layout";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import { TaskFrom } from "../components/TaskFrom";
import { TaskList } from "../components/TaskList";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    )
  }
  return (
    <Layout title="Todo App">
      <ArrowLeftOnRectangleIcon
        className="h-6 w-6 cursor-pointer text-blue-600"
        onClick={() => signOut()}
      />
      <p className="my-3 text-xl text-blie-600">{session?.user?.name}</p>
      <TaskFrom />
      <TaskList />
    </Layout>
  );
};

export default Home;
