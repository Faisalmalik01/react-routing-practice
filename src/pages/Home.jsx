export default function Home() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center p-8 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to the React Routing Playground!</h1>
      <p className="max-w-xl text-center text-lg mb-6">
        Explore routing like a pro. Click on the links above to navigate through different pages,
        see nested routes in action, and build a real-world app with ease.
      </p>
      
      <p className="max-w-xl text-center mb-6 italic">
        <strong>Note:</strong> This app is a <em>Single Page Application (SPA)</em>, meaning React Router updates the URL and page content without full page reloads, giving you a smooth and fast user experience.
      </p>
      
      <img 
        src="https://cdn-icons-png.flaticon.com/512/906/906175.png" 
        alt="React logo" 
        className="w-32 h-32 animate-bounce"
      />
    </div>
  );
}
