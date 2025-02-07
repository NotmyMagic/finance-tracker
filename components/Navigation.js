import { ImStatsBars } from "react-icons/im";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User info */}
        <div className="flex items-center gap-2">
          <div className="h-20 w-20 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://images.pexels.com/photos/1383766/pexels-photo-1383766.jpeg"
              alt="Profile img"
            />
          </div>
          <small> Hi, mate</small>
        </div>

        <nav className="flex items-center gap-4">
          <div>
            <ImStatsBars className="text-2xl" />
          </div>
          <div>
            <button className="btn btn-danger">Sign Out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
