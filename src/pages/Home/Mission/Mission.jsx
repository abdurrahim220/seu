import React from "react";

const Mission = () => {
  return (
    <>
      <div className="flex gap-4 items-center mx-auto">
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.3JpFam4YU6Ki1Yn7QYsa7AHaHa?w=208&h=209&c=7&r=0&o=5&pid=1.7"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
