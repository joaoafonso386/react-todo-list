import Intro from "../../components/common/Intro/Intro";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <main>
        <article>
          <Intro title={"Approach"}>
            <div class="text-container">
              <div>
                <strong>Create an architecture that can scale</strong>
                <ul>
                  <li>
                    components folder should hold components that are as dummy
                    as possible
                  </li>
                  <li>
                    it is divided into common and Layout as Layout holds
                    components that are going to be present in ideally all pages
                  </li>
                  <li>
                    views are a collection of components to create each page of
                    the application
                  </li>
                  <li>
                    the api's folder holds the configuration for the api used
                    and also the functions that can be used to request the api
                  </li>
                  <li>
                    routing uses the client side routing provided by
                    react-router (v6) in this case
                  </li>
                </ul>
              </div>
              <div>
                <strong>Performance</strong>
                <ul>
                  <li>
                    to solve the issue of having an API that adds todos every X
                    milliseconds pagination was implemented so that the app does
                    not have to do a massive render of the list (the infinite
                    scrolling approach could have been also used)
                  </li>
                  <li>
                    usage of React.memo() in the TodosList component so that
                    re-renders are only made when the list updates
                  </li>
                </ul>
              </div>
              <div>
                <strong>Unit tests</strong>
                <ul>
                  The unit tests were focused on:
                  <li>
                    snapshots - check if the layout is present && that it does
                    not shift unexpectedly)
                  </li>
                  <li>
                    routing - check if the routes are working as they are
                    supposed to
                  </li>
                  <li>
                    API request - check if the request in successful (test will
                    fail if the API is not running)
                  </li>
                  <li>
                    pagination - see if the pagination component is passing to
                    the next or previous page
                  </li>
                </ul>
              </div>
              <div>
                <strong>Styling</strong>
                <ul>
                  <li>keeping it minimal and using MUI</li>
                </ul>
              </div>
            </div>
          </Intro>
        </article>
      </main>
    </div>
  );
};

export default HomePage;
