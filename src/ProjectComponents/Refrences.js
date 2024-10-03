import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const References = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        References
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>How does light affect sleep?</strong> <br />
        Light affects the body’s internal 24-hour biological clock, which regulates sleep patterns and plays a key role in a person’s circadian rhythm. When it is light outside, the body signals that it's time to stay awake, and as it gets dark, the body prepares for sleep. <br />
        <Link href="https://www.sleepfoundation.org/bedroom-environment/what-color-light-helps-you-sleep" target="_blank" rel="noopener noreferrer">
          Read more at Sleep Foundation
        </Link>
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Colour of light that helps you sleep:</strong> <br />
        A dark environment is ideal for sleep. However, in the hours before bedtime, softer, warmer tones like yellows and oranges are better than cooler light, such as the blue light emitted by electronic devices. This is because light significantly influences our sleep-wake cycle. <br />
        <Link href="https://www.sleepfoundation.org/bedroom-environment/what-color-light-helps-you-sleep" target="_blank" rel="noopener noreferrer">
          Read more at Sleep Foundation
        </Link>
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Wakening zone:</strong> <br />
        More bright blue-rich light during the morning is good for the human body to start the day. Bright, full-spectrum white and blue lights can be used to brighten indoor spaces in the morning. They can be integrated into light fixtures, but care should be taken with their placement to prevent unwanted glare. <br />
        <Link href="https://www.alzdiscovery.org/cognitive-vitality/blog/how-does-light-exposure-affect-memory" target="_blank" rel="noopener noreferrer">
          Read more at Alzheimer's Discovery Foundation
        </Link>
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Sleeping zone:</strong> <br />
        Use blue-blocking filters. Electronics emit significant blue light, and many devices have settings to apply filters in the evening to reduce blue light exposure. Alternatively, blue-light filtering glasses can be worn. Blackout curtains can be used to minimize the effects of environmental light pollution. <br />
        <Link href="https://www.alzdiscovery.org/cognitive-vitality/blog/how-does-light-exposure-affect-memory" target="_blank" rel="noopener noreferrer">
          Read more at Alzheimer's Discovery Foundation
        </Link>
      </Typography>
    </Box>
  );
};

export default References;
