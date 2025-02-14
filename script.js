const getSnowflakeCount = () => {
  let width = window.screen.width;

  if (width < 768) return 1000;
  if (width < 1024) return 1500;

  return 2000;
};

const letItSnow = () => {
  const snowflakeArea = document.querySelector(".snowflake-area");

  for (let i = 0; i < getSnowflakeCount(); i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const randomSize = Math.random() * 4 + 1;
    const randomDuration = Math.random() * 11 + 4;
    const randomXPosition = Math.random() * 100;
    const randomDelay = Math.random() * 6;
    const randomOpacity = Math.random() * 0.2 + 0.4;

    snowflake.style.left = `${randomXPosition}%`;
    snowflake.style.animationDuration = `${randomDuration}s`;
    snowflake.style.width = `${randomSize}px`;
    snowflake.style.animationDelay = `${randomDelay}s`;
    snowflake.style.opacity = `${randomOpacity}`;

    snowflakeArea.appendChild(snowflake);
  }
};

letItSnow();
