class HomeController < ApplicationController
  def index
    @number = [1,2,3,4,5].sample
  end
end
