import type { FC } from 'frog/jsx';

export const SuccessScreen: FC<{ address: string, name: string, image: string }> = ({ address, name, image }) => {
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
          fontSize: 16,
          fontWeight: 500,
          color: "black",
        }}
      >
        <div style={{ display: "flex", textTransform: "uppercase" }}>Delegated to: {address}</div>
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
            width: "30%",
            display: "flex",
            backgroundImage: "url(https://www.optimism.io/vision/sunny-swirl.svg)",
            backgroundRepeat: 'no-repeat',
            marginLeft: 25,
          }}
        ></div>

        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 72,
            marginTop: 48,
          }}
        >

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 98,
              }}
            >
              <div
                style={{
                  fontSize: 78,
                  lineHeight: `${40}px`,
                }}
              >
                Congrats!
              </div>
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 55,
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  lineHeight: `${40}px`,

                }}
              >
                You successfully delegated to
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 48,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 56,
                    lineHeight: `${72}px`,
                    backgroundImage: 'linear-gradient(90deg, rgb(255, 0, 128), rgb(255, 77, 77), rgb(249, 203, 40))',
                    backgroundClip: 'text',
                    '-webkit-background-clip': 'text',
                    color: 'transparent',
                  }}
                >
                  {name}
                </div>
                <img
                  key={image}
                  src={image}
                  alt="Profile"
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    marginRight: 15,
                  }}
                />
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
