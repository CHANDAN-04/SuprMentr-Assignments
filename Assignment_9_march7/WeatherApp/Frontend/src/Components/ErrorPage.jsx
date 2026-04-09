function ErrorPage({ message }) {
  return (
    <div className="error-screen">
      <h1>⚠️ Error</h1>
      <h3>{message}</h3>
      <p>Please check the city name and try again.</p>
    </div>
  );
}

export default ErrorPage;
