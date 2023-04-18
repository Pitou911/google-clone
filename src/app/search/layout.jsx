import SearchHeader from "@/components/SearchHeader";
import "@/app/globals.css";
import Head from "@/app/head";

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
