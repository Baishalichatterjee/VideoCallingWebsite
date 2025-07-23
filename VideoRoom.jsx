import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VideoRoom = () => {
  const { roomID } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      const appID = 2126332565;
      const serverSecret = 'a8f803d0660c31feb9b97d1193cdad4b';
      // ✅ Sanitize roomID and generate a valid userID
      const cleanRoomID = roomID.replace(/[^a-zA-Z0-9_]/g, '');
      const userID = `user_${Date.now()}`;
      const userName = 'Baishali Chatterjee';

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        cleanRoomID,
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Copy link',
            url: `${window.location.origin}/room/${cleanRoomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting();
  }, [roomID]);

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default VideoRoom;
