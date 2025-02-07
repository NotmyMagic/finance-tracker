import { useContext } from "react";

import { authContext } from "@/Lib/store/auth-context";

import { ImStatsBars } from "react-icons/im";

function Nav() {
  const { user, loading, logout } = useContext(authContext);

  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User info */}
        {user && !loading && (
          <div className="flex items-center gap-2">
            {/* img */}
            <div className="h-20 w-20 rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* name */}
            <small>Hi, {user.displayName}!</small>
          </div>
        )}

        {/* rightside nav */}
        {user && !loading && (
          <nav className="flex items-center gap-4">
            <div>
              <ImStatsBars className="text-2xl" />
            </div>
            <div>
              <button onClick={logout} className="btn btn-danger">
                Sign Out
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;
