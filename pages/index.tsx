import Head from "next/head";
import Header from "../components/header";
import JournalForm from "../components/forms/journal-form";

import journalData from "../journalData.json";
import JournalsWrapper from "../components/journals-wrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chingu Solo Project - Journal App</title>
        <meta
          name="description"
          content="This is a simple journal app for my first Chingu solo project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageTitle={"Create a Note"} />
      <main className="flex flex-col gap-16">
        <p className="pb-6 leading-6 text-gray-800">
          Use the form below to create a journal. Make sure that you fill the
          required title and body fields.
        </p>

        <JournalForm />
        <JournalsWrapper journalArray={journalData} />
      </main>
    </>
  );
}
