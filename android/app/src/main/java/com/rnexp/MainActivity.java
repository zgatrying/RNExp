package com.rnexp;
import org.devio.rn.splashscreen.SplashScreen; // import this
import android.os.Bundle; // import this
import com.facebook.react.ReactActivity;
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RNExp";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        SplashScreen.show(this, true);  // here
        super.onCreate(savedInstanceState);
    }
}
