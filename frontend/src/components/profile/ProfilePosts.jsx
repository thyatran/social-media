import { useState } from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import ProfilePicDefault from "./ProfilePicDefault";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import EditPost from "./EditPost";
import useDeletePost from "../../hooks/useDeletePost";
import DeletePost from "./DeletePost";

const ProfilePosts = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const { authUser } = useAuthContext();
  const profilePic = authUser.profilePic;

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModelOpen(true);
  };

  const openDeleteModal = (post) => {
    setSelectedPost(post);
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModelOpen(false);
    setIsDeleteModalOpen(false);
  };

  const { posts, loading, error } = useGetUserPosts();
  const { loading: deleteLoading, deletePost } = useDeletePost();

  if (loading) {
    return <span className="loading loading-spinner"></span>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="border border-gray-300 p-4 rounded-box"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 items-center justify-center rounded-full">
                  {profilePic ? (
                    <img
                      src={profilePic || "/profilepic1.jpg"}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <ProfilePicDefault username={post.postedBy.username} />
                  )}
                </div>

                <p className="text-sm text-gray-800 font-semibold">
                  {post.postedBy.username || "Unknown"}
                </p>
                <p className="text-sm ">{extractTime(post.createdAt)}</p>
              </div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-white border-none hover:bg-transparent hover:shadow shadow-none"
                >
                  <BsThreeDots />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-box z-[1] w-36 p-2 shadow"
                >
                  <li>
                    <a onClick={() => openModal(post)}>Edit Post</a>
                  </li>
                  <li>
                    <a onClick={() => openDeleteModal(post)}>Delete Post</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm mb-2">{post.text}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post Image"
                className="w-auto h-26 rounded-md"
              />
            )}

            <div className="flex gap-10 items-center mt-3 text-gray-400">
              <div className="flex items-center gap-1">
                <button>
                  <FaRegHeart />
                </button>
                <p className="text-sm">{post.likes?.length || 0}</p>
              </div>
              <div className="flex items-center gap-1">
                <button>
                  <FaRegComment />
                </button>
                <p className="text-sm">{post.replies.length || 0}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
      {isModalOpen && selectedPost && (
        <EditPost
          postId={selectedPost._id}
          currentText={selectedPost.text}
          onClose={closeModal}
        />
      )}
      {isDeleteModalOpen && selectedPost && (
        <DeletePost
          postId={selectedPost._id}
          onClose={closeModal}
          deletePost={deletePost}
        />
      )}
    </div>
  );
};

export default ProfilePosts;
