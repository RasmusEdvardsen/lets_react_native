import { Href, Redirect } from 'expo-router';

export default function Page() {
  return <Redirect href={"/home" as Href} />;
}