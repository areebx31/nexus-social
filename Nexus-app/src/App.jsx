import { useState, useCallback } from "react";


import "./styles/global.js";

// Context
import { AuthProvider } from "./context/AuthContext";

// Custom hook
import { useFetchPosts } from "./hooks/usePosts";

// Layout
import Navbar from "./components/Navbar";

// Pages
import FeedPage    from "./pages/FeedPage";
import ExplorePage from "./pages/ExplorePage";
import ProfilePage from "./pages/ProfilePage";



export default function App() {
  const [page, setPage]           = useState("feed");
  const [profileId, setProfileId] = useState(null);
  const { posts, dispatch, loading } = useFetchPosts();

  
  const viewProfile = useCallback((userId) => {
    setProfileId(userId);
    setPage("profile");
  }, []);


  const viewMyProfile = useCallback(() => {
    setProfileId(1); // currentUser id is 1
    setPage("profile");
  }, []);

  return (
    <AuthProvider>
      <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

        <Navbar page={page} setPage={setPage} onMyProfile={viewMyProfile} />

        <main style={{ maxWidth: 620, margin: "0 auto", padding: "24px 16px" }}>
          {page === "feed" && (
            <FeedPage
              posts={posts}
              dispatch={dispatch}
              loading={loading}
              onViewProfile={viewProfile}
            />
          )}

          {page === "explore" && (
            <ExplorePage onViewProfile={viewProfile} />
          )}

          {page === "profile" && (
            <ProfilePage
              userId={profileId || 1}
              posts={posts}
              dispatch={dispatch}
              onViewProfile={viewProfile}
            />
          )}
        </main>

      </div>
    </AuthProvider>
  );
}
