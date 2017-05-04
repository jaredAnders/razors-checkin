class PagesController < ApplicationController
  def index
    @props = { name: "Blade" }
  end
end
