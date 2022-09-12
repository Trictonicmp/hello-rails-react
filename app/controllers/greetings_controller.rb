class GreetingsController < ApplicationController
  def show
    @greeting = Greeting.find(Greeting.pluck(:id).sample)
    render json: @greeting
  end
end
