import React from 'react';

const Search = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          政策文献检索
        </h1>
        <p className="text-center text-gray-600 mb-8">
          按领域、时间、类型检索政策文献资料
        </p>

        <div className="flex gap-4 mb-6">
          <select className="border rounded-lg px-4 py-2 w-48">
            <option value="all">全部领域</option>
            <option value="economy">经济政策</option>
            <option value="tech">科技创新</option>
            <option value="education">教育发展</option>
            <option value="environment">环境保护</option>
          </select>

          <input
            type="text"
            placeholder="输入政策关键词..."
            className="flex-1 border rounded-lg px-4 py-2"
          />

          <button className="bg-blue-900 text-white px-8 py-2 rounded-lg">
            搜索
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <label className="flex items-center">
            <input type="radio" name="docType" className="mr-2" defaultChecked />
            <span>政策文件</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="docType" className="mr-2" />
            <span>法律法规</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="docType" className="mr-2" />
            <span>规划纲要</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="docType" className="mr-2" />
            <span>研究报告</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>扩展搜索</span>
          </label>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <span>快速检索：</span>
          <a href="#" className="text-blue-600 mx-2">产业政策</a>
          <span>·</span>
          <a href="#" className="text-blue-600 mx-2">碳中和</a>
          <span>·</span>
          <a href="#" className="text-blue-600 mx-2">更多</a>
          <span className="mx-4">|</span>
          <a href="#" className="text-blue-600 mx-2">政策分析助手</a>
          <span>·</span>
          <a href="#" className="text-blue-600 mx-2">AI写作</a>
          <span>·</span>
          <a href="#" className="text-blue-600 mx-2">智能阅读</a>
        </div>
      </div>
    </div>
  );
};

export default Search;