# TODO
* Do full UI design before integrating to firebase/supabase, and geo.
    - Use dummy data and timeouts to mock changes to subscribe to.
* Redux for state management? Look in state management immediately after UI design done.
* Implement group page navigation with expo-router (top bar navigation with map, chat and maybe participants).
* Implement login page (and redirecting to login page if not logged in).
* Figure out if we need those _layout.tsx files.
* Figure out how to configure topbar of pages without breaking navigation (using `<Stack screenOptions={{title: "Title"}}/>` in every page breaks navigation).