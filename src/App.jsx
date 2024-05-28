import React from "react";
import "./App.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 p-10 rounded-md shadow-md w-96">
        <div className="flex justify-center mb-8">
          <img
            src="https://velog.velcdn.com/images/jiandme/post/5d07639a-5cfc-4a7d-b641-9222e5c194a7/image.jpg"
            alt="Instagram"
            className="h-18 px-4  "
          />
        </div>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="mb-2 px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="mb-4 px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 transition duration-200">
            로그인
          </button>
          <div className="flex justify-center my-4">
            <span className="text-gray-400">OR</span>
          </div>
          <button className="flex items-center justify-center bg-blue-50 py-2 rounded font-medium text-blue-500 hover:bg-blue-100 transition duration-200">
            <svg className="w-5 h-5 mr-2" fill="currentColor"></svg>
            facebook으로 로그인
          </button>
          <a
            href="#"
            className="text-sm text-blue-500 text-center mt-4 hover:underline"
          >
            비밀번호를 잊으셨나요?
          </a>
        </form>
      </div>
      <div className="bg-white border border-gray-300 p-4 mt-4 w-96 text-center">
        <span>계정이 없으신가요? </span>
        <a href="#" className="text-blue-500 font-medium hover:underline">
          가입하기
        </a>
      </div>
      <div>
        <div className="text-sm mb-2 flex justify-center ">
          앱을 다운로드하세요.
        </div>

        <div className="flex justify-center space-x-2">
          <a
            href="https://www.apple.com/app-store/"
            className="bg-black text-white py-2 px-4 rounded flex items-center hover:bg-gray-900 transition duration-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="h-6 mr-2"
            />
            App Store에서 다운로드하기
          </a>
          <a
            href="https://play.google.com/store"
            className="bg-black text-white py-2 px-4 rounded flex items-center hover:bg-gray-900 transition duration-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-2 mr-2"
            />
            다운로드하기 GooglePlay
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
