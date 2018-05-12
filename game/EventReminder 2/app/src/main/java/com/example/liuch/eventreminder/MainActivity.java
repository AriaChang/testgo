package com.example.liuch.eventreminder;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {
    //step1:Declare
    WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //step2 hook up
        myWebView = (WebView) findViewById(R.id.wv1);

        //step3 make it work
        loadMyWebView(myWebView);

    }
    private void loadMyWebView(WebView myWebView) {
        myWebView.getSettings().setJavaScriptEnabled(true);
        myWebView.setWebViewClient(new WebViewClient());
        myWebView.loadUrl("http://www.chenliu65.com/AAU/wnm617/");


    }
}
