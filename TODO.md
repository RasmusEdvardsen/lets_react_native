# TODO
* Do full UI design before integrating to firebase/supabase, and geo.
    - Use dummy data and timeouts to mock changes to subscribe to.
* Redux for state management? Look in state management immediately after UI design done.
* Implement chat page and map page (need android phone for map page).
* Implement login page (and redirecting to login page if not logged in).
* Try run on android and iOS devices
    - Try get android phone and also get mac to run on both devices.
* Try to declutter expo and eas as much as possible (try minimal template and copy in to repo).
* Annotate { navigation } with type other than any.
* Need background location updates. If not active for more than 30 minutes, disable location updates.
* Idea: No groups, just active with title ("Drinks at Ofelia's"), Friends tab becomes Chat/Friends tab. would be easier to implement.

# Release:
## Google Maps SDK
* Maps SDK uses expo development build debug keystore. For release, go through this, but for google play store instead: https://docs.expo.dev/versions/latest/sdk/map-view/