type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export default function ThroughEarthButton({
  onClick,
  disabled,
}: Props) {

  return (

    <button

      onClick={onClick}

      disabled={disabled}

      style={{

        position:
          "fixed",

        bottom:
          "200px",

        left:
          "50%",

        transform:
          "translateX(-50%)",

        zIndex:
          9999,

        padding:
          "16px 32px",

        borderRadius:
          "20px",

        color:
          "white",

        fontSize:
          "18px",

        letterSpacing:
          "0.2em",

        textTransform:
          "uppercase",

        backdropFilter:
          "blur(12px)",

        background:
          "rgba(255,255,255,0.1)",

        border:
          "1px solid rgba(255,255,255,0.2)",

        boxShadow:
          "0 20px 40px rgba(0,0,0,0.4)",

        transition:
          "all .5s",

        cursor:
          disabled
            ? "not-allowed"
            : "pointer",

        opacity:
          disabled
            ? 0.4
            : 1,

      }}

      onMouseEnter={(e)=>{

        e.currentTarget.style.background =
          "rgba(255,255,255,.2)";

      }}

      onMouseLeave={(e)=>{

        e.currentTarget.style.background =
          "rgba(255,255,255,.1)";

      }}

    >

      Through Earth

    </button>

  );

}