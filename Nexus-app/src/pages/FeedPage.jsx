import Compose from "../components/Compose";
import PostCard from "../components/PostCard";
import LoadingSpinner from "../components/LoadingSpinner";

// ─── FEED PAGE ────────────────────────────────────────────────────────────────
// The main timeline: compose box + list of all posts.
// Props:
//   posts         - array of post objects
//   dispatch      - posts reducer dispatch
//   loading       - boolean, true while fetching
//   onViewProfile - callback(userId) to navigate to a profile

export default function FeedPage({ posts, dispatch, loading, onViewProfile }) {
  return (
    <div>
      <Compose dispatch={dispatch} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        posts.map((post, i) => (
          <div key={post.id} style={{ animationDelay: `${i * 0.07}s` }}>
            <PostCard post={post} dispatch={dispatch} onViewProfile={onViewProfile} />
          </div>
        ))
      )}
    </div>
  );
}
