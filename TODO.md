# TODO
* Do full UI design before integrating to firebase/supabase, and geo.
    - Use dummy data and timeouts to mock changes to subscribe to.
* Redux for state management? Look in state management immediately after UI design done.
* Implement map page.
    * 'Go live' FAB only on map page.
    * Pop up animation on markers of friends and self.
* Implement chat page.
    - getstream.io for chat ui inspiration?
* Implement login page (and redirecting to login page if not logged in).
    - Either [expo authentication](https://docs.expo.dev/router/reference/authentication/) or [react navigation authentication](https://reactnavigation.org/docs/auth-flow/)
* Try run on iOS device (need mac).
* Try to declutter expo and eas as much as possible (try minimal template and copy in to repo).
* Annotate { navigation } with type other than any.
* Need background location updates. If not active for more than 30 minutes, disable location updates.
* Idea: No groups, just active with title ("Drinks at Ofelia's"), Friends tab becomes Chat/Friends tab. would be easier to implement.
* No landscape mode, only portrait.
* Firebase or Supabase?
    - Firebase: More mature, more features, more expensive, more complex.
    - Supabase: More simple, more modern, more open source, more free.

# Release
## Google Maps SDK
* Maps SDK uses expo development build debug keystore. For release, go through this, but for google play store instead: https://docs.expo.dev/versions/latest/sdk/map-view/