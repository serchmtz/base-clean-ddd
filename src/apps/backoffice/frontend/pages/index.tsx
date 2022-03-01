import React from "react";
import Link from "next/link";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <Link href="/events">Events</Link>
    </div>
  );
};

export default Home;
