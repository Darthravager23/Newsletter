import PageContent from "../components/PageContent";

function HomePage() {
  return (
    <PageContent title='NOTICE !'>
      <p>
        Please view this project{" "}
        <span style={{ color: "#fab833" }}>'' WITH ''</span> &{" "}
        <span style={{ color: "#fab833" }}>''WITHOUT''</span> login
      </p>
    </PageContent>
  );
}

export default HomePage;
