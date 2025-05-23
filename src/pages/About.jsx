export default function About() {
  return (
    <div className="min-h-[60vh] p-10 bg-blue-50 rounded-lg shadow-md flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-5 text-blue-900">About This App</h2>
      <p className="mb-6 text-blue-800 text-lg max-w-xl">
        This React routing demo showcases nested routes, dynamic parameters, and layouts.
        It's a simple playground designed to make learning routing in React fun and practical.
      </p>
      <ul className="list-disc list-inside text-blue-900 space-y-2 max-w-xl">
        <li>Use <strong>NavLink</strong> for navigation with active styles.</li>
        <li>Nested routes inside layouts like <code>Dashboard</code> and <code>PagesLayout</code>.</li>
        <li>Dynamic URL params using <code>useParams()</code> (e.g., <code>/user/:id</code>).</li>
        <li>Handling 404 with catch-all routes and <code>NotFound</code> page.</li>
        <li>Redirects with <code>Navigate</code> component for route correction.</li>
        <li>Using <code>Outlet</code> for nested routing layouts.</li>
        <li>Simple login form routed from Navbar.</li>
      </ul>
      <div className="mt-8 text-blue-900 font-semibold max-w-xl">
        <p>Fun Facts:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>React was first released by Facebook in 2013.</li>
          <li>React Router DOM helps manage complex routes easily in React apps.</li>
          <li>Nested routes allow layouts to be reused efficiently across pages.</li>
          <li>The <code>useParams()</code> hook provides easy access to URL parameters.</li>
        </ul>
      </div>
    </div>
  );
}
