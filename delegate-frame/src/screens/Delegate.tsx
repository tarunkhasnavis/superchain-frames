import type { FC } from 'frog/jsx';

export const DelegateScreen: FC<{ address: string, name: string, image: string, statement: string }> = ({ address, name, image, statement }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: 'linear-gradient(to bottom, #C7E3F0, #FFD7D7)',
        fontFamily: 'Inter',
      }}
    >
      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          fontSize: '20px', // Increased from 16px
          fontWeight: 500,
          color: "black",
        }}
      >
        <div style={{ display: "flex", textTransform: "uppercase" }}>Delegate To: {address}</div>
        <div style={{ textTransform: "uppercase" }}>Optimism Governance</div>
      </div>

      <div
        style={{
          display: "flex",
          height: "10%",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "25%",
            display: "flex",
            backgroundImage: "url(https://www.optimism.io/vision/sunny-swirl.svg)",
            backgroundRepeat: 'no-repeat',
            marginLeft: 25,
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: '46px', // Increased from 36px
                  lineHeight: '54px', // Adjusted for increased font size
                }}
              >
                Delegate to:
              </div>
              <div
                style={{
                  fontSize: '72px', // Increased from 56px
                  lineHeight: '84px', // Adjusted for increased font size
                  backgroundImage: 'linear-gradient(90deg, rgb(255, 0, 128), rgb(255, 77, 77), rgb(249, 203, 40))',
                  backgroundClip: 'text',
                  '-webkit-background-clip': 'text',
                  color: 'transparent',
                }}
              >
                {name}
              </div>
            </div>
            <img
              src={image}
              alt="Profile"
              style={{
                width: 120, // Adjust if necessary
                height: 120, // Adjust if necessary
                borderRadius: "50%",
                marginRight: 35,
              }}
            />
          </div>

          <div
            style={{
              width: "80%",
              fontSize: '32px', // Increased from 24px
              lineHeight: '36px', // Adjusted for increased font size
              color: "#0F111A",
            }}
          >
            {statement}
          </div>
        </div>
      </div>
    </div>
  );
};
