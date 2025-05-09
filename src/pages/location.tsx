import React, { useState, useEffect } from "react";

const LocationComponent = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("⚠️ المتصفح لا يدعم تحديد الموقع الجغرافي.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      (err) => {
        console.error(err);
        setError("⚠️ لم يتمكن من تحديد الموقع. هل منحت الإذن؟");
      }
    );
  }, []);

  return (
    <div style={{ width: "99%", height: "98vh", textAlign: "center" }}>
      <h2>🌍 موقعي الحالي</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {lat && lng ? (
        <>
          <p>📍 خط العرض: {lat.toFixed(6)}</p>
          <p>📍 خط الطول: {lng.toFixed(6)}</p>

          <iframe
            width="100%"
            height="80%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat},${lng}`}
            style={{ border: "1px solid black", borderRadius: "10px", marginTop: "10px" }}
          ></iframe>
        </>
      ) : (
        !error && <p>⏳ جاري تحديد الموقع...</p>
      )}
    </div>
  );
};

export default LocationComponent;
